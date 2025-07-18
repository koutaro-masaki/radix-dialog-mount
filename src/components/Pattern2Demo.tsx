import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/Dialog";

type Props = {
  initialValue: number;
};

export const Pattern2Demo: React.FC<Props> = (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-green-400 text-white rounded">
          Pattern 2 (State揮発)
        </button>
      </DialogTrigger>
      <DialogContent>
        <Content {...props} />
      </DialogContent>
    </Dialog>
  );
};

const Content: React.FC<Props> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <>
      <DialogTitle>Pattern 2</DialogTitle>
      <div className="flex gap-2 items-center">
        <button
          className="size-8 border rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <span>Count: {count}</span>
      </div>
    </>
  );
};
