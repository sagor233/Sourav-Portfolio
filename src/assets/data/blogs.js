export const blogsData = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    slug: 'getting-started-with-react-hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
    content: `React Hooks revolutionized the way we write React components. In this comprehensive guide, we'll explore the most commonly used hooks and how they can simplify your code.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have since become the standard way to write React components.

## useState Hook

The useState hook allows you to add state to functional components:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## useEffect Hook

The useEffect hook lets you perform side effects in function components:

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

You can create your own hooks to reuse stateful logic:

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  
  return [value, setValue];
}
\`\`\`

Hooks have made React development more intuitive and powerful. Start using them in your projects today!`,
    category: 'React',
    author: 'Sourav Biswas',
    date: '2025-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    slug: 'mastering-tailwind-css',
    excerpt: 'Discover the power of utility-first CSS framework and how it can speed up your development.',
    content: `Tailwind CSS has transformed the way developers approach styling. Let's dive deep into what makes it so powerful.

## Why Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.

## Key Benefits

1. **Rapid Development**: Build interfaces faster with pre-defined utility classes
2. **Consistency**: Maintain design consistency across your project
3. **Customization**: Easily customize your design system
4. **Performance**: Purge unused CSS in production

## Getting Started

Install Tailwind CSS:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

## Common Patterns

### Responsive Design
\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>
\`\`\`

### Dark Mode
\`\`\`html
<div class="bg-white dark:bg-gray-800">
  Dark mode support
</div>
\`\`\`

Start using Tailwind CSS and experience the productivity boost!`,
    category: 'CSS',
    author: 'Sourav Biswas',
    date: '2025-01-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
    tags: ['CSS', 'Tailwind', 'Web Development']
  },
  {
    id: 3,
    title: 'Building RESTful APIs with Node.js',
    slug: 'building-restful-apis-nodejs',
    excerpt: 'A complete guide to creating scalable and maintainable REST APIs using Node.js and Express.',
    content: `Building robust APIs is a crucial skill for full-stack developers. Let's explore how to create professional-grade REST APIs.

## Setting Up Express

First, install the required packages:

\`\`\`bash
npm install express mongoose dotenv cors
\`\`\`

## Creating Your First Route

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## Best Practices

1. **Use proper HTTP methods**: GET, POST, PUT, DELETE
2. **Implement error handling**: Always handle errors gracefully
3. **Validate input**: Use libraries like Joi or express-validator
4. **Secure your API**: Implement authentication and authorization
5. **Document your API**: Use tools like Swagger

## Authentication

Implement JWT authentication:

\`\`\`javascript
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
}
\`\`\`

Building great APIs takes practice, but following these principles will set you on the right path!`,
    category: 'Backend',
    author: 'Sourav Biswas',
    date: '2025-01-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tags: ['Node.js', 'Express', 'Backend', 'API']
  },
  {
    id: 4,
    title: 'MongoDB Best Practices',
    slug: 'mongodb-best-practices',
    excerpt: 'Learn essential MongoDB patterns and practices for building scalable applications.',
    content: `MongoDB is a powerful NoSQL database, but using it effectively requires understanding best practices.

## Schema Design

Design your schemas based on how you'll query the data:

\`\`\`javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});
\`\`\`

## Indexing

Create indexes for frequently queried fields:

\`\`\`javascript
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });
\`\`\`

## Query Optimization

Use projection to limit returned fields:

\`\`\`javascript
User.find({}, 'name email').limit(10);
\`\`\`

## Aggregation Pipeline

Perform complex queries:

\`\`\`javascript
User.aggregate([
  { $match: { active: true } },
  { $group: { _id: '$country', count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);
\`\`\`

Follow these practices to build efficient MongoDB applications!`,
    category: 'Database',
    author: 'Sourav Biswas',
    date: '2024-12-28',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
    tags: ['MongoDB', 'Database', 'Backend']
  },
  {
    id: 5,
    title: 'Modern JavaScript ES6+ Features',
    slug: 'modern-javascript-es6-features',
    excerpt: 'Explore the latest JavaScript features that will make your code cleaner and more efficient.',
    content: `JavaScript has evolved significantly. Let's explore the modern features you should be using.

## Arrow Functions

Concise syntax for functions:

\`\`\`javascript
const add = (a, b) => a + b;
const square = x => x * x;
\`\`\`

## Destructuring

Extract values from objects and arrays:

\`\`\`javascript
const { name, age } = user;
const [first, second] = array;
\`\`\`

## Spread Operator

Copy and merge objects/arrays:

\`\`\`javascript
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProp: value };
\`\`\`

## Template Literals

String interpolation:

\`\`\`javascript
const message = \`Hello, \${name}! You are \${age} years old.\`;
\`\`\`

## Async/Await

Handle promises elegantly:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Optional Chaining

Safely access nested properties:

\`\`\`javascript
const city = user?.address?.city;
\`\`\`

These features make JavaScript more powerful and enjoyable to write!`,
    category: 'JavaScript',
    author: 'Sourav Biswas',
    date: '2024-12-20',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800',
    tags: ['JavaScript', 'ES6', 'Programming']
  },
  {
    id: 6,
    title: 'Responsive Web Design Principles',
    slug: 'responsive-web-design-principles',
    excerpt: 'Master the art of creating websites that look great on all devices.',
    content: `Responsive design is no longer optional. Here's how to build websites that work everywhere.

## Mobile-First Approach

Start with mobile designs and scale up:

\`\`\`css
/* Mobile styles */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}
\`\`\`

## Flexible Grids

Use percentage-based widths:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## Responsive Images

\`\`\`html
<img 
  srcset="image-small.jpg 480w,
          image-medium.jpg 768w,
          image-large.jpg 1200w"
  sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 50vw,
         33vw"
  src="image-large.jpg"
  alt="Responsive image"
/>
\`\`\`

## Viewport Units

Use vw, vh for responsive sizing:

\`\`\`css
.hero {
  height: 100vh;
  font-size: 5vw;
}
\`\`\`

## Testing

Test on real devices and use browser DevTools to ensure your design works everywhere!`,
    category: 'Design',
    author: 'Sourav Biswas',
    date: '2024-12-15',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    tags: ['CSS', 'Responsive Design', 'Web Development']
  }
];