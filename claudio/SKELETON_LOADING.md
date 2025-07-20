# Skeleton Loading System

This document describes the skeleton loading system implemented in the ClaudioAI app to provide better user experience during loading states.

## Components

### 1. Skeleton Component (`app/components/Skeleton.tsx`)

The main skeleton component with various variants and configurations:

```tsx
import Skeleton from "./components/Skeleton";

// Basic usage
<Skeleton variant="rounded" width="200px" height="40px" />

// Text skeleton with multiple lines
<Skeleton variant="text" lines={3} spacing="md" />

// Circular skeleton (for avatars)
<Skeleton variant="circular" width="40px" height="40px" />
```

**Props:**

- `variant`: "text" | "circular" | "rectangular" | "rounded"
- `width`: string | number
- `height`: string | number
- `lines`: number (for multi-line text)
- `spacing`: "sm" | "md" | "lg"
- `className`: additional CSS classes

### 2. Pre-built Skeleton Components

#### ChatSkeleton

```tsx
import { ChatSkeleton } from "./components/Skeleton";
<ChatSkeleton />;
```

#### ChatInputSkeleton

```tsx
import { ChatInputSkeleton } from "./components/Skeleton";
<ChatInputSkeleton />;
```

#### SidebarSkeleton

```tsx
import { SidebarSkeleton } from "./components/Skeleton";
<SidebarSkeleton />;
```

#### HeaderSkeleton

```tsx
import { HeaderSkeleton } from "./components/Skeleton";
<HeaderSkeleton />;
```

### 3. Page-specific Skeletons

#### ChatPageSkeleton (`app/components/ChatPageSkeleton.tsx`)

Complete skeleton for the main chat page.

#### AppSkeleton (`app/components/AppSkeleton.tsx`)

Complete skeleton for the entire app layout.

#### SignInSkeleton (`app/components/SignInSkeleton.tsx`)

Skeleton for the signin page.

#### MessageSkeleton (`app/components/MessageSkeleton.tsx`)

Skeleton for individual messages.

```tsx
import MessageSkeleton, { AIResponseSkeleton, UserMessageSkeleton } from "./components/MessageSkeleton";

// Generic message skeleton
<MessageSkeleton isUser={false} showAvatar={true} />

// AI response skeleton
<AIResponseSkeleton />

// User message skeleton
<UserMessageSkeleton />
```

## Loading Hooks

### useLoading Hook (`app/hooks/useLoading.ts`)

Simple loading state management:

```tsx
import { useLoading } from "./hooks/useLoading";

const MyComponent = () => {
  const { isLoading, startLoading, stopLoading, setLoading } = useLoading();

  const handleSubmit = async () => {
    startLoading();
    try {
      await someAsyncOperation();
    } finally {
      stopLoading();
    }
  };

  if (isLoading) {
    return <SomeSkeleton />;
  }

  return <ActualContent />;
};
```

### useMultipleLoading Hook

For managing multiple loading states:

```tsx
import { useMultipleLoading } from "./hooks/useLoading";

const MyComponent = () => {
  const { startLoading, stopLoading, isLoading, isAnyLoading } =
    useMultipleLoading();

  const handleUserAction = async () => {
    startLoading("userAction");
    try {
      await performUserAction();
    } finally {
      stopLoading("userAction");
    }
  };

  if (isAnyLoading()) {
    return <SomeSkeleton />;
  }

  return <ActualContent />;
};
```

## CSS Animations

The skeleton system includes custom CSS animations in `app/globals.css`:

- `skeleton-shimmer`: Shimmer effect animation
- `skeleton-pulse`: Pulse animation
- `animate-pulse`: Tailwind's built-in pulse animation

## Usage Examples

### 1. Page Loading

```tsx
const ChatPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchChatData();
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <ChatPageSkeleton />;
  }

  return <ActualChatPage />;
};
```

### 2. Message Loading

```tsx
const ChatInput = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    setIsSending(true);
    try {
      await sendMessage();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <input />
      {isSending && <AIResponseSkeleton />}
    </div>
  );
};
```

### 3. Component Loading

```tsx
const Sidebar = () => {
  const { data: chats, loading } = useCollection(chatQuery);

  if (loading) {
    return <SidebarSkeleton />;
  }

  return <ActualSidebar chats={chats} />;
};
```

## Best Practices

1. **Use appropriate skeleton types**: Match the skeleton to the actual content structure
2. **Keep loading times reasonable**: Don't show skeletons for too long
3. **Provide feedback**: Use loading states to indicate progress
4. **Consistent styling**: Use the same skeleton styling across the app
5. **Accessibility**: Ensure skeletons don't interfere with screen readers

## Customization

To customize skeleton appearance, modify the CSS classes in `app/globals.css`:

```css
.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}
```

## Performance Considerations

- Skeletons are lightweight and don't impact performance significantly
- Use `useCallback` for loading state functions to prevent unnecessary re-renders
- Consider lazy loading for heavy components
- Use appropriate loading times to avoid flickering
