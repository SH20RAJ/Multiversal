# Deployment Guide - Multiversal.blog

This guide covers deployment options for the Multiversal.blog platform.

## 🚀 Deployment Options

### 1. Cloudflare Pages (Recommended)

The project is pre-configured for Cloudflare Pages deployment with OpenNext.

#### Quick Deploy

```bash
npm run deploy
```

#### Manual Cloudflare Setup

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare**
   ```bash
   npx wrangler pages deploy
   ```

3. **Configure Environment Variables**
   - Go to Cloudflare Dashboard > Pages > Your Project > Settings
   - Add environment variables as needed

### 2. Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3. Netlify Deployment

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```

### 4. Self-Hosted Deployment

#### Using Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

#### Using PM2

```bash
# Install PM2
npm i -g pm2

# Build the project
npm run build

# Start with PM2
pm2 start npm --name "multiversal" -- start
```

## 🔧 Environment Configuration

### Production Environment Variables

Create a `.env.production` file:

```env
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
NEXT_PUBLIC_API_URL="https://api.your-domain.com"
DATABASE_URL="your_production_database_url"
```

### Required Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Your production domain
- `NEXT_PUBLIC_API_URL`: API endpoint URL
- `DATABASE_URL`: Database connection string (when backend is implemented)

## 🏗️ Build Optimization

### Production Build Settings

The project is optimized for production with:

- **Turbopack**: Fast development builds
- **Next.js 15**: Latest performance optimizations
- **Ant Design**: Tree-shaking for smaller bundles
- **Tailwind CSS**: Purged CSS for minimal file sizes

### Performance Checklist

- [ ] Images optimized and using Next.js Image component
- [ ] Code splitting implemented for route-based optimization
- [ ] Bundle analysis completed (`npm run analyze`)
- [ ] Lighthouse scores verified (Performance, Accessibility, SEO)
- [ ] Core Web Vitals optimized

## 🔍 Monitoring & Analytics

### Recommended Tools

- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error tracking and performance monitoring
- **Lighthouse CI**: Automated performance testing

## 📋 Pre-Deployment Checklist

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Mobile responsiveness verified
- [ ] Accessibility compliance tested
- [ ] SEO meta tags implemented
- [ ] Environment variables configured
- [ ] SSL certificate configured
- [ ] Domain DNS settings updated
- [ ] Performance optimization completed
- [ ] Error monitoring set up

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall dependencies
   - Verify all import paths are correct

2. **Runtime Errors**
   - Check browser console for client-side errors
   - Verify environment variables are set correctly
   - Ensure all API endpoints are accessible

3. **Performance Issues**
   - Run `npm run build` to check bundle sizes
   - Optimize images and assets
   - Implement code splitting if needed

### Support

For deployment issues:
- Check GitHub Issues for similar problems
- Contact support at [sh20raj@gmail.com](mailto:sh20raj@gmail.com)
- Review Next.js deployment documentation
