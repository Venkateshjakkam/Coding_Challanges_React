import React, { useState } from "react";
import "./FolderStructure.css";

// Initial data
const fileExplorerData = {
  id: "root",
  name: "root",
  isFolder: true,
  nodes: [
    {
      id: "1",
      name: "public",
      isFolder: true,
      nodes: [
        {
          id: "11",
          name: "images",
          isFolder: true,
          nodes: [
            { id: "111", name: "cover.png" },
            {
              id: "112",
              name: "icons",
              isFolder: true,
              nodes: [{ id: "1121", name: "arrow.svg" }],
            },
          ],
        },
        { id: "12", name: "public_nested_file" },
      ],
    },
    {
      id: "2",
      name: "src",
      isFolder: true,
      nodes: [
        {
          id: "21",
          name: "components",
          isFolder: true,
          nodes: [
            { id: "211", name: "index.js" },
            { id: "212", name: "index.html" },
            { id: "213", name: "index.css" },
          ],
        },
        { id: "22", name: "main.jsx" },
        { id: "23", name: "App.jsx" },
        { id: "24", name: "app.module.css" },
      ],
    },
    {
      id: "3",
      name: "dist",
      isFolder: true,
      nodes: [
        { id: "31", name: "index.js" },
        { id: "32", name: "index.html" },
        { id: "33", name: "index.css" },
      ],
    },
    { id: "4", name: "package.json" },
    { id: "5", name: "package-lock.json" },
  ],
};

const FolderNode = ({ item, onDelete, onRename }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleRenameClick = () => {
    setIsEditing(true);
  };

  const handleRenameSubmit = () => {
    if (editedName.trim()) {
      onRename(item.id, editedName.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRenameSubmit();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedName(item.name);
    }
  };

  return (
    <div className="folder-node">
      <div className="folder-label">
        <span
          onClick={item.isFolder ? handleToggle : undefined}
          style={{ cursor: item.isFolder ? "pointer" : "default" }}
        >
          {item.isFolder ? (isOpen ? "📂" : "📁") : "📄"}{" "}
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onBlur={handleRenameSubmit}
              onKeyDown={handleKeyDown}
              autoFocus
              style={{ fontSize: "14px", padding: "2px", width: "150px" }}
            />
          ) : (
            item.name
          )}
        </span>

        <span className="folder-actions">
          <button onClick={handleRenameClick}>Rename</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </span>
      </div>

      {item.isFolder && isOpen && item.nodes && (
        <div className="folder-children">
          {item.nodes.map((child) => (
            <FolderNode
              key={child.id}
              item={child}
              onDelete={onDelete}
              onRename={onRename}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const StructureFolderData = () => {
  const [data, setData] = useState(fileExplorerData);

  const deleteNode = (node, id) => {
    if (!node.nodes) return node;
    node.nodes = node.nodes
      .filter((child) => child.id !== id)
      .map((child) => deleteNode(child, id));
    return node;
  };

  const renameNode = (node, id, newName) => {
    if (node.id === id) {
      node.name = newName;
    } else if (node.nodes) {
      node.nodes = node.nodes.map((child) => renameNode(child, id, newName));
    }
    return node;
  };

  const handleDelete = (id) => {
    const updatedData = deleteNode({ ...data }, id);
    setData(updatedData);
  };

  const handleRename = (id, newName) => {
    // const newName = prompt("Enter new name:");
    if (newName) {
      const updatedData = renameNode({ ...data }, id, newName);
      setData(updatedData);
    }
  };

  return (
    <div>
      <FolderNode item={data} onDelete={handleDelete} onRename={handleRename} />
    </div>
  );
};

export default StructureFolderData;
