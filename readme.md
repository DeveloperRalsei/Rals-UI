# Rals UI

A simple react ui component library reminiscent of my favorite fictional character ralsei :3

## Installation

> I prefer to use vite for development because when I tried to use webpack it was veeeeery slow and some of the components were not working properly. I didn't try any other bundlers so I don't know if they work properly.

```bash
npm i rals-ui
```

then add this to your main file (src/index.tsx or src/main.tsx)

```tsx
// ... your imports
import "rals-ui/styles.css";

// ... your app
```

## Usage

```tsx
import { Button, Container, Group } from "rals-ui";

export default function App() {
  return <Button>Click Me!</Button>;
}
```

## Components

- [x] Button
- [x] Container
- [x] Group
- [x] Tooltip
- [x] Title
- [x] Text
- [x] Paper
- [x] **Panel** (Header height is not working when main content is long)
- [x] Card
- [x] Grid
- [ ] **Inputs** (WIP)
- [ ] Modal
- [ ] Card
- [ ] Modal

---

# Notes

- This is a very early version of the library. I'm still working on it.
- I'm not a pro :P so if you find any bugs or have any suggestions, please open an issue or a pull request.
- Light mode has some issues and not working correctly.
- I also took a lot of inspiration from the mantine library
- My library is not so customizable though. I'm working on it.
