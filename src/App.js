
import { useEffect, useState } from "react";

export default function App() {
  const [nodes, setNodes] = useState([]);

  const addNode = (id, depth, parentId = null) => {
    setNodes((prev) => [
      ...prev,
      { id, depth, parentId }
    ]);
  };

  useEffect(() => {
    let idCounter = 0;

    const bomb = (depth, parentId = null) => {
      if (depth > 5) return;
      const currentId = idCounter++;
      addNode(currentId, depth, parentId);

      setTimeout(() => bomb(depth + 1, currentId), 300);
      setTimeout(() => bomb(depth + 1, currentId), 300);
    };

    bomb(0);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>JS Fork Bomb Visualizer</h1>
      <div style={{ display: "grid", gap: "10px" }}>
        {nodes.map((node) => (
          <div key={node.id} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "2px 2px 5px rgba(0,0,0,0.1)" }}>
            <div><strong>ID:</strong> {node.id}</div>
            <div><strong>Depth:</strong> {node.depth}</div>
            <div><strong>Parent:</strong> {node.parentId ?? 'None'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}