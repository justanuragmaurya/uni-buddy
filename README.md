# Uni Buddy

Uni Buddy is an anonymous platform connecting students for academic assistance. Get help with your assignments discreetly and efficiently.

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **File Uploads**: UploadThing

## Features

1. **Anonymous Assignment Posting**: Students can post their assignment needs without revealing their identity.
2. **Peer Assistance**: Connect with fellow students who can help with academic tasks.
3. **Responsive Design**: Fully responsive layout that works on desktop and mobile devices.
4. **Modern UI**: Utilizes custom UI components and animations for an engaging user experience.

## Project Structure

- \`/app\`: Contains the main application pages and layouts
- \`/components\`: Reusable React components
- \`/lib\`: Utility functions and shared logic
- \`/public\`: Static assets

## Key Components

### Navbar

\`\`\`typescript:components/Navbar/index.tsx
startLine: 6
endLine: 45
\`\`\`

The Navbar component provides navigation links and a responsive menu for mobile devices.

### Home Page

\`\`\`typescript:app/page.tsx
startLine: 8
endLine: 54
\`\`\`

The home page showcases the main features of Uni Buddy with animated text and a preview of the application.

## Getting Started

To run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is designed to be easily deployed on Vercel, the platform from the creators of Next.js.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
