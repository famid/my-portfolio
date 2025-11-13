const data = [
    {
        id: "a7f3b2c1-4d5e-6789-0abc-def123456789",
        slug: "optimizing-campaign-execution",
        title: "Optimizing Campaign Execution: From 2 Minutes to 1 Second",
        date: "November 2025",
        category: "Performance Optimization",
        excerpt: "How we reduced campaign processing time by 99.2% using queue-based architecture, Redis caching, and database optimization in a high-traffic e-commerce platform serving tens of thousands of customers.",
        readTime: "8 min read",
        author: "Ahsanul Hoque Famid",
        content: [
            {
                type: "paragraph",
                text: "At Anzaar Lifestyle, we faced a critical performance bottleneck: executing marketing campaigns for tens of thousands of customers was taking over 2 minutes. This meant our marketing team couldn't run time-sensitive promotions, and the system would timeout during peak hours."
            },
            {
                type: "heading",
                level: 2,
                text: "The Problem"
            },
            {
                type: "paragraph",
                text: "Our original campaign execution system was synchronous. When a marketer triggered a campaign targeting 50,000 customers, the system would:"
            },
            {
                type: "list",
                items: [
                    "Fetch all customer records from the database",
                    "Apply campaign filters synchronously",
                    "Send notifications to each customer one by one",
                    "Wait for all operations to complete before responding"
                ]
            },
            {
                type: "paragraph",
                text: "This approach caused several issues: database connection pool exhaustion, HTTP request timeouts, and an extremely poor user experience for the marketing team."
            },
            {
                type: "heading",
                level: 2,
                text: "The Solution: Queue-Based Architecture"
            },
            {
                type: "paragraph",
                text: "We redesigned the system using BullMQ (Redis-backed queue) with the following architecture:"
            },
            {
                type: "code",
                language: "typescript",
                text: `// Campaign trigger endpoint - returns immediately
async triggerCampaign(campaignId: string) {
  const campaign = await this.campaignRepo.findById(campaignId);

  // Add to queue and return immediately
  await this.campaignQueue.add('process-campaign', {
    campaignId,
    filters: campaign.filters
  });

  return { status: 'queued', message: 'Campaign processing started' };
}`
            },
            {
                type: "paragraph",
                text: "The queue worker processes campaigns asynchronously in batches:"
            },
            {
                type: "code",
                language: "typescript",
                text: `// Queue processor - handles batching
@Process('process-campaign')
async processCampaign(job: Job) {
  const { campaignId, filters } = job.data;

  // Process in batches of 1000
  const batchSize = 1000;
  let offset = 0;

  while (true) {
    const customers = await this.getFilteredCustomers(
      filters,
      batchSize,
      offset
    );

    if (customers.length === 0) break;

    // Process batch in parallel
    await Promise.all(
      customers.map(c => this.sendNotification(c, campaignId))
    );

    offset += batchSize;
    await job.updateProgress((offset / totalCount) * 100);
  }
}`
            },
            {
                type: "heading",
                level: 2,
                text: "Redis Caching Layer"
            },
            {
                type: "paragraph",
                text: "We implemented aggressive caching for frequently accessed data:"
            },
            {
                type: "list",
                items: [
                    "Customer segments cached for 5 minutes",
                    "Campaign templates cached until modified",
                    "Product catalog cached with cache-aside pattern",
                    "Filter criteria results cached based on TTL"
                ]
            },
            {
                type: "paragraph",
                text: "This reduced database queries by 85% during campaign execution."
            },
            {
                type: "heading",
                level: 2,
                text: "Database Optimization"
            },
            {
                type: "paragraph",
                text: "We identified N+1 query problems and added strategic indexes:"
            },
            {
                type: "code",
                language: "sql",
                text: `-- Created compound index for common filter queries
CREATE INDEX idx_customers_filters
ON customers(status, city, total_purchases, created_at);

-- Optimized campaign targeting query
SELECT c.id, c.email, c.phone
FROM customers c
WHERE c.status = 'active'
  AND c.city IN ($1)
  AND c.total_purchases >= $2
LIMIT 1000 OFFSET $3;`
            },
            {
                type: "heading",
                level: 2,
                text: "Results"
            },
            {
                type: "paragraph",
                text: "The impact was dramatic:"
            },
            {
                type: "list",
                items: [
                    "Campaign trigger response: 2 minutes → <1 second (99.2% improvement)",
                    "Background processing: Handles 50,000 customers in ~30 seconds",
                    "Database load: Reduced by 85% through caching",
                    "System stability: Zero timeouts during peak hours",
                    "Marketing team productivity: Can run multiple campaigns simultaneously"
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Key Takeaways"
            },
            {
                type: "list",
                items: [
                    "Never process large datasets synchronously in web requests",
                    "Queue-based architecture provides better UX and system stability",
                    "Strategic caching can eliminate most database queries",
                    "Batch processing with parallelization is crucial for scalability",
                    "Proper database indexing is still fundamental"
                ]
            },
            {
                type: "paragraph",
                text: "This optimization not only solved our immediate problem but also positioned the platform to handle 10x growth without major architectural changes."
            }
        ]
    },
    {
        id: "b8e4c3d2-5f6a-7890-1bcd-ef0234567890",
        slug: "migrating-users-firestore-to-mongodb",
        title: "Migrating 25,000+ Users from Firestore to MongoDB: Lessons Learned",
        date: "October 2024",
        category: "Architecture & Migration",
        excerpt: "A deep dive into planning and executing a large-scale database migration using Dockerized microservices, zero-downtime strategies, and comprehensive data validation techniques.",
        readTime: "12 min read",
        author: "Ahsanul Hoque Famid",
        content: [
            {
                type: "paragraph",
                text: "When Relaxy scaled to over 25,000 active users across Bangladesh, we hit the limits of our Firestore-based architecture. Query costs were skyrocketing, and we needed more flexible data modeling for our mental health platform's complex relationships."
            },
            {
                type: "heading",
                level: 2,
                text: "Why We Migrated"
            },
            {
                type: "paragraph",
                text: "Firestore served us well initially, but several factors forced the migration:"
            },
            {
                type: "list",
                items: [
                    "Cost: Read operations were costing $800+/month with 120,000+ active users",
                    "Complex queries: Firestore's limited query capabilities made reporting difficult",
                    "Data modeling: Needed better support for relational data (users, sessions, therapists, bookings)",
                    "Aggregations: Running analytics required expensive workarounds",
                    "Team expertise: Our backend team had strong MongoDB experience"
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Migration Strategy"
            },
            {
                type: "paragraph",
                text: "We planned a phased migration with zero downtime:"
            },
            {
                type: "heading",
                level: 3,
                text: "Phase 1: Dual-Write System"
            },
            {
                type: "paragraph",
                text: "We implemented a dual-write layer that wrote to both databases:"
            },
            {
                type: "code",
                language: "typescript",
                text: `@Injectable()
export class UserService {
  constructor(
    private firestoreRepo: FirestoreUserRepository,
    private mongoRepo: MongoUserRepository,
    private logger: Logger
  ) {}

  async createUser(userData: CreateUserDto) {
    // Primary write to Firestore (existing system)
    const firestoreUser = await this.firestoreRepo.create(userData);

    try {
      // Secondary write to MongoDB (new system)
      await this.mongoRepo.create({
        ...userData,
        firestoreId: firestoreUser.id,
        migratedAt: new Date()
      });
    } catch (error) {
      // Log but don't fail - Firestore is source of truth
      this.logger.error('MongoDB sync failed', error);
    }

    return firestoreUser;
  }
}`
            },
            {
                type: "heading",
                level: 3,
                text: "Phase 2: Historical Data Migration"
            },
            {
                type: "paragraph",
                text: "We built a migration service running in Docker containers:"
            },
            {
                type: "code",
                language: "typescript",
                text: `async migrateUsers() {
  const batchSize = 100;
  let lastDocId = null;
  let migratedCount = 0;

  while (true) {
    // Fetch batch from Firestore
    const query = this.firestore
      .collection('users')
      .orderBy('createdAt')
      .limit(batchSize);

    if (lastDocId) {
      query.startAfter(lastDocId);
    }

    const batch = await query.get();
    if (batch.empty) break;

    // Transform and insert to MongoDB
    const users = batch.docs.map(doc => this.transformUser(doc));
    await this.mongoRepo.insertMany(users);

    migratedCount += batch.size;
    lastDocId = batch.docs[batch.size - 1];

    this.logger.log(\`Migrated \${migratedCount} users\`);

    // Rate limiting to avoid overwhelming databases
    await this.sleep(1000);
  }
}`
            },
            {
                type: "heading",
                level: 3,
                text: "Phase 3: Data Validation"
            },
            {
                type: "paragraph",
                text: "Critical step: validating data integrity across both systems. We built a validation script:"
            },
            {
                type: "code",
                language: "typescript",
                text: `async validateMigration() {
  const firestoreCount = await this.firestoreRepo.count();
  const mongoCount = await this.mongoRepo.count();

  console.log(\`Firestore: \${firestoreCount}, MongoDB: \${mongoCount}\`);

  // Random sampling validation
  const sampleSize = 1000;
  const randomUsers = await this.getRandomSample(sampleSize);

  let mismatches = 0;
  for (const userId of randomUsers) {
    const fsUser = await this.firestoreRepo.findById(userId);
    const mongoUser = await this.mongoRepo.findByFirestoreId(userId);

    if (!this.compareUsers(fsUser, mongoUser)) {
      mismatches++;
      this.logger.warn(\`Mismatch for user \${userId}\`);
    }
  }

  const accuracy = ((sampleSize - mismatches) / sampleSize) * 100;
  console.log(\`Data accuracy: \${accuracy.toFixed(2)}%\`);
}`
            },
            {
                type: "heading",
                level: 3,
                text: "Phase 4: Read Migration"
            },
            {
                type: "paragraph",
                text: "Gradually shifted reads to MongoDB using feature flags:"
            },
            {
                type: "code",
                language: "typescript",
                text: `async getUser(userId: string) {
  // Feature flag controls read source
  const useMongoForReads = await this.featureFlags.isEnabled(
    'mongo-reads',
    { userId }
  );

  if (useMongoForReads) {
    return this.mongoRepo.findById(userId);
  }

  return this.firestoreRepo.findById(userId);
}`
            },
            {
                type: "heading",
                level: 2,
                text: "Challenges & Solutions"
            },
            {
                type: "heading",
                level: 3,
                text: "1. Schema Transformation"
            },
            {
                type: "paragraph",
                text: "Firestore's denormalized structure needed restructuring for MongoDB:"
            },
            {
                type: "list",
                items: [
                    "Firestore: Nested subcollections for sessions",
                    "MongoDB: Embedded documents with proper indexing",
                    "Solution: Created transformation layer handling both structures during transition"
                ]
            },
            {
                type: "heading",
                level: 3,
                text: "2. Timestamp Inconsistencies"
            },
            {
                type: "paragraph",
                text: "Firestore timestamps vs. JavaScript dates caused subtle bugs. Fixed by standardizing to ISO strings during migration."
            },
            {
                type: "heading",
                level: 3,
                text: "3. Connection Pool Management"
            },
            {
                type: "paragraph",
                text: "Running dual writes risked connection pool exhaustion. Implemented separate pools with proper sizing:"
            },
            {
                type: "code",
                language: "typescript",
                text: `// MongoDB connection with optimized pool
MongooseModule.forRoot(process.env.MONGO_URI, {
  maxPoolSize: 50,
  minPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})`
            },
            {
                type: "heading",
                level: 2,
                text: "Results"
            },
            {
                type: "list",
                items: [
                    "Zero downtime: Migration completed with 100% uptime",
                    "Data integrity: 99.97% accuracy (73 edge cases fixed manually)",
                    "Cost savings: Database costs reduced by 60% ($800 → $320/month)",
                    "Query performance: Complex reports now run in <2s (previously 20s+)",
                    "Developer productivity: Team velocity increased 40% with familiar MongoDB",
                    "Migration time: 3 weeks from planning to full cutover"
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Key Lessons"
            },
            {
                type: "list",
                items: [
                    "Dual-write phase is critical - don't skip it",
                    "Automated validation catches 95% of issues",
                    "Feature flags enable safe, gradual rollout",
                    "Plan for schema differences early",
                    "Monitor everything during migration",
                    "Keep rollback plan ready (we never needed it)",
                    "Communication with stakeholders prevents panic"
                ]
            },
            {
                type: "paragraph",
                text: "This migration proved that with careful planning, even large-scale database migrations can be executed smoothly without user impact."
            }
        ]
    },
    {
        id: "c9f5d4e3-6a7b-8901-2cde-f01345678901",
        slug: "scalable-payment-integration-multi-gateway",
        title: "Building Scalable Payment Integration: Multi-Gateway Architecture with NestJS",
        date: "August 2024",
        category: "System Design",
        excerpt: "Implementing a flexible payment gateway abstraction layer supporting bKash, GP, and Bdapps. Design patterns, retry mechanisms, webhook handling strategies, and ensuring transaction reliability.",
        readTime: "10 min read",
        author: "Ahsanul Hoque Famid",
        content: [
            {
                type: "paragraph",
                text: "Building a mental health platform in Bangladesh required supporting multiple local payment gateways: bKash (mobile wallet), Grameenphone (carrier billing), and Bdapps (digital payment platform). Each had different APIs, authentication mechanisms, and reliability characteristics."
            },
            {
                type: "heading",
                level: 2,
                text: "The Challenge"
            },
            {
                type: "paragraph",
                text: "We needed a system that could:"
            },
            {
                type: "list",
                items: [
                    "Support multiple payment gateways without code duplication",
                    "Handle gateway failures gracefully with automatic retry",
                    "Process webhooks reliably (some gateways retry, others don't)",
                    "Maintain transaction consistency across services",
                    "Allow easy addition of new payment gateways",
                    "Provide unified error handling and logging"
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Architecture: Strategy Pattern + Factory"
            },
            {
                type: "paragraph",
                text: "We used the Strategy pattern with a Factory to abstract payment gateway differences:"
            },
            {
                type: "code",
                language: "typescript",
                text: `// Payment gateway interface
interface IPaymentGateway {
  createPayment(order: Order): Promise<PaymentResponse>;
  verifyPayment(transactionId: string): Promise<VerificationResponse>;
  handleWebhook(payload: any): Promise<WebhookResult>;
  refund(transactionId: string, amount: number): Promise<RefundResponse>;
}

// bKash implementation
@Injectable()
export class BkashGateway implements IPaymentGateway {
  async createPayment(order: Order) {
    const token = await this.authenticate();
    const response = await this.httpService.post(
      'https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/create',
      {
        amount: order.amount,
        merchantInvoiceNumber: order.id,
        intent: 'sale'
      },
      { headers: { Authorization: token } }
    );

    return {
      gatewayTransactionId: response.paymentID,
      redirectUrl: response.bkashURL,
      status: 'pending'
    };
  }

  // ... other methods
}`
            },
            {
                type: "code",
                language: "typescript",
                text: `// Gateway factory
@Injectable()
export class PaymentGatewayFactory {
  constructor(
    private bkash: BkashGateway,
    private grameen: GrameenGateway,
    private bdapps: BdappsGateway
  ) {}

  getGateway(type: PaymentGatewayType): IPaymentGateway {
    switch (type) {
      case 'bkash': return this.bkash;
      case 'grameen': return this.grameen;
      case 'bdapps': return this.bdapps;
      default: throw new Error(\`Unsupported gateway: \${type}\`);
    }
  }
}`
            },
            {
                type: "heading",
                level: 2,
                text: "Payment Service Orchestration"
            },
            {
                type: "paragraph",
                text: "The payment service coordinates the entire flow:"
            },
            {
                type: "code",
                language: "typescript",
                text: `@Injectable()
export class PaymentService {
  async initiatePayment(dto: CreatePaymentDto) {
    // 1. Create transaction record (status: initiated)
    const transaction = await this.transactionRepo.create({
      orderId: dto.orderId,
      amount: dto.amount,
      gateway: dto.gateway,
      status: 'initiated'
    });

    try {
      // 2. Call gateway
      const gateway = this.factory.getGateway(dto.gateway);
      const result = await gateway.createPayment(dto);

      // 3. Update transaction
      await this.transactionRepo.update(transaction.id, {
        gatewayTransactionId: result.gatewayTransactionId,
        status: 'pending',
        metadata: result
      });

      // 4. Return redirect URL to frontend
      return {
        transactionId: transaction.id,
        redirectUrl: result.redirectUrl
      };
    } catch (error) {
      // 5. Mark failed
      await this.transactionRepo.update(transaction.id, {
        status: 'failed',
        error: error.message
      });
      throw error;
    }
  }
}`
            },
            {
                type: "heading",
                level: 2,
                text: "Webhook Reliability"
            },
            {
                type: "paragraph",
                text: "Webhooks are critical but unreliable. We implemented idempotency and retry handling:"
            },
            {
                type: "code",
                language: "typescript",
                text: `@Post('webhook/:gateway')
async handleWebhook(
  @Param('gateway') gateway: string,
  @Body() payload: any,
  @Headers('signature') signature: string
) {
  // 1. Verify signature
  if (!this.verifyWebhookSignature(gateway, payload, signature)) {
    throw new UnauthorizedException('Invalid signature');
  }

  // 2. Extract transaction ID
  const transactionId = this.extractTransactionId(gateway, payload);

  // 3. Idempotency check
  const existing = await this.webhookLogRepo.findByTransactionId(
    transactionId
  );
  if (existing) {
    this.logger.warn(\`Duplicate webhook for \${transactionId}\`);
    return { status: 'already_processed' };
  }

  // 4. Log webhook
  await this.webhookLogRepo.create({
    transactionId,
    gateway,
    payload,
    receivedAt: new Date()
  });

  // 5. Process payment
  const gatewayImpl = this.factory.getGateway(gateway);
  const result = await gatewayImpl.handleWebhook(payload);

  // 6. Update transaction
  await this.transactionRepo.update(transactionId, {
    status: result.status,
    completedAt: new Date()
  });

  // 7. Emit event for other services
  await this.eventBus.emit('payment.completed', {
    transactionId,
    orderId: result.orderId,
    amount: result.amount
  });

  return { status: 'success' };
}`
            },
            {
                type: "heading",
                level: 2,
                text: "Retry Mechanism"
            },
            {
                type: "paragraph",
                text: "Payment verifications can fail temporarily. We implemented exponential backoff:"
            },
            {
                type: "code",
                language: "typescript",
                text: `async verifyWithRetry(transactionId: string, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const gateway = this.factory.getGateway(transaction.gateway);
      const result = await gateway.verifyPayment(
        transaction.gatewayTransactionId
      );

      return result;
    } catch (error) {
      lastError = error;

      if (attempt < maxRetries) {
        // Exponential backoff: 2s, 4s, 8s
        const delay = Math.pow(2, attempt) * 1000;
        await this.sleep(delay);
      }
    }
  }

  throw new PaymentVerificationError(
    \`Failed after \${maxRetries} attempts\`,
    lastError
  );
}`
            },
            {
                type: "heading",
                level: 2,
                text: "Transaction State Machine"
            },
            {
                type: "paragraph",
                text: "We enforce valid state transitions to prevent data corruption:"
            },
            {
                type: "code",
                language: "typescript",
                text: `const VALID_TRANSITIONS = {
  initiated: ['pending', 'failed'],
  pending: ['completed', 'failed', 'cancelled'],
  completed: ['refunded'],
  failed: ['initiated'], // Allow retry
  cancelled: [],
  refunded: []
};

async updateTransactionStatus(id: string, newStatus: TransactionStatus) {
  const transaction = await this.transactionRepo.findById(id);
  const currentStatus = transaction.status;

  if (!VALID_TRANSITIONS[currentStatus]?.includes(newStatus)) {
    throw new InvalidTransitionError(
      \`Cannot transition from \${currentStatus} to \${newStatus}\`
    );
  }

  return this.transactionRepo.update(id, { status: newStatus });
}`
            },
            {
                type: "heading",
                level: 2,
                text: "Monitoring & Alerting"
            },
            {
                type: "paragraph",
                text: "We track key metrics for payment health:"
            },
            {
                type: "list",
                items: [
                    "Success rate by gateway (alert if <95%)",
                    "Average payment completion time",
                    "Webhook processing delays",
                    "Failed payment reasons (grouped)",
                    "Refund rate trends",
                    "Gateway API latency"
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Results"
            },
            {
                type: "list",
                items: [
                    "Payment success rate: 97.3% (industry average: 85-90%)",
                    "Average completion time: 8 seconds (user confirmation to webhook)",
                    "Zero duplicate payments due to idempotency",
                    "Added new gateway (Nagad) in just 2 days",
                    "Webhook reliability: 99.8% (with retry handling)",
                    "Customer support tickets reduced by 40%"
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Key Takeaways"
            },
            {
                type: "list",
                items: [
                    "Abstract gateway differences early - Strategy pattern is your friend",
                    "Idempotency is non-negotiable for webhooks",
                    "State machines prevent invalid transitions",
                    "Retry with exponential backoff handles transient failures",
                    "Comprehensive logging saves hours in debugging",
                    "Monitor everything - payments are critical path",
                    "Test with real sandbox environments extensively"
                ]
            },
            {
                type: "paragraph",
                text: "Building a reliable payment system requires careful attention to edge cases, but the abstractions pay off when adding new gateways or handling failures."
            }
        ]
    }
];

export default data;
