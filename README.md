# StreamCompare - Streaming Subscription Comparison App

A modern, production-ready React application for comparing streaming service subscriptions with integrated Stripe payment processing and Docker deployment.

## Features

- 🎬 Compare Amazon Prime, Netflix, and Disney+ Hotstar plans
- 💳 Secure Stripe payment integration with real-time processing
- 🐳 Docker containerization for easy deployment
- 📱 Fully responsive design with modern UI/UX
- ⚡ Built with Vite + React + TypeScript
- 🎨 Beautiful Tailwind CSS styling with animations
- 🔒 Production-ready with security headers and HTTPS support
- 🚀 Express.js backend with Stripe webhook handling

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)
- Stripe account for payment processing

### Development Setup

1. **Clone and install dependencies:**
```bash
cd project
npm install
cd server && npm install && cd ..
```

2. **Configure Stripe:**
   - Create a [Stripe account](https://dashboard.stripe.com/register)
   - Get your API keys from the [Developers section](https://dashboard.stripe.com/apikeys)
   - Copy environment files and add your keys:
```bash
cp .env.example .env
cp server/.env.example server/.env
```

3. **Add your Stripe keys to the environment files:**
```env
# .env (frontend)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# server/.env (backend)
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

4. **Start the development servers:**
```bash
# Terminal 1: Start backend server (from project directory)
cd server && npm run dev

# Terminal 2: Start frontend (from project directory)
npm run dev
```

### Docker Deployment

```bash
# Build and run with Docker Compose (from project directory)
cd project
docker-compose up --build

# Access the app at http://localhost:3000
```

### Production Deployment

```bash
# Build for production (from project directory)
cd project
npm run build

# Or use Docker for production
docker-compose --profile production up --build
```

## Payment Integration

The app includes full Stripe integration with:

- **Secure Payment Processing**: PCI-compliant payment handling
- **Real-time Payment Status**: Live updates during payment flow
- **Webhook Support**: Automatic payment confirmation and order fulfillment
- **Multiple Payment Methods**: Credit/debit cards, digital wallets
- **Indian Payment Support**: INR currency with local payment methods

### Stripe Configuration

1. **Get your Stripe keys:**
   - Publishable key (starts with `pk_test_` or `pk_live_`)
   - Secret key (starts with `sk_test_` or `sk_live_`)

2. **Set up webhooks (optional but recommended):**
   - Go to Stripe Dashboard > Developers > Webhooks
   - Add endpoint: `https://yourdomain.com/webhook`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`

3. **Test payments:**
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date and CVC

## API Endpoints

### Backend Server (Port 3001)

- `GET /health` - Health check
- `POST /api/create-payment-intent` - Create Stripe payment intent
- `GET /api/payment-intent/:id` - Get payment status
- `POST /webhook` - Stripe webhook handler

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Landing section
│   │   ├── SubscriptionTable.tsx # Main comparison table
│   │   ├── PaymentModal.tsx      # Payment interface
│   │   ├── StripeCheckout.tsx    # Stripe payment component
│   │   └── Footer.tsx            # Footer component
│   ├── lib/
│   │   └── stripe.ts             # Stripe configuration
│   ├── App.tsx                   # Main app component
│   └── main.tsx                  # Entry point
├── server/
│   ├── server.js                 # Express.js backend
│   ├── package.json              # Backend dependencies
│   └── .env.example              # Backend environment template
├── Dockerfile                    # Container configuration
├── docker-compose.yml            # Multi-service orchestration
└── nginx.conf                    # Production web server config
```

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Stripe.js
- **Backend**: Node.js, Express.js, Stripe SDK
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (production)
- **Payment Processing**: Stripe

## Environment Variables

### Frontend (.env)
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_API_URL=http://localhost:3001
```

### Backend (server/.env)
```env
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Security Features

- SSL/TLS encryption for all communications
- PCI DSS compliant payment processing
- CORS protection with configurable origins
- Security headers (CSP, XSS protection, etc.)
- Input validation and sanitization
- Webhook signature verification

## Deployment Options

### Docker Compose (Recommended)
```bash
cd project
docker-compose up --build
```

### Manual Deployment
1. Build frontend: `npm run build` (from project directory)
2. Deploy `dist/` folder to web server
3. Deploy backend to Node.js hosting service
4. Configure environment variables
5. Set up SSL certificates

### Cloud Deployment
- **Frontend**: Netlify, Vercel, AWS S3 + CloudFront
- **Backend**: Railway, Render, AWS ECS, Google Cloud Run
- **Database**: PostgreSQL, MongoDB (if needed for user management)

## License

MIT License - feel free to use this project for your streaming service comparison needs!

## Support

For issues with:
- **Stripe Integration**: Check the [Stripe Documentation](https://stripe.com/docs)
- **Docker**: Refer to [Docker Documentation](https://docs.docker.com/)
- **React/Vite**: See [Vite Documentation](https://vitejs.dev/)