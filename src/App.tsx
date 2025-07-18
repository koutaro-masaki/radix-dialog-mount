import { useState } from "react";
import { Pattern1Demo } from "./components/Pattern1Demo";
import { Pattern2Demo } from "./components/Pattern2Demo";

const App: React.FC = () => {
  const [initialValue, setInitialValue] = useState(0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Dialog State Demo</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">初期値:</label>
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(Number(e.target.value))}
          className="px-2 py-1 border rounded"
        />
      </div>

      <div className="flex gap-4">
        <Pattern1Demo initialValue={initialValue} />
        <Pattern2Demo initialValue={initialValue} />
      </div>
    </div>
  );
};

export default App;
