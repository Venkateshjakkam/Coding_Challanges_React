import React, { Children, useState } from "react";
import "./NestedCheckBox.css";

const checkboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Oranges",
          },
          {
            id: 4,
            name: "Leamon",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Berries",
    children: [
      {
        id: 6,
        name: "Strawberry",
      },
      {
        id: 7,
        name: "BlueBerry",
      },
    ],
  },
  {
    id: 8,
    name: "Apple",
    children: [
      {
        id: 9,
        name: "Green Apple",
      },
      {
        id: 10,
        name: "PineApple",
      },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      const verifiedChecked = (node) => {
        const allChildrenChecked = node.children.every(
          (child) => prev[child.id]
        );
        newState[node.id] = allChildrenChecked;
      };

      verifiedChecked(checkboxesData);

      return newState;
    });
  };

  return (
    <div>
      {data.map((node, index) => {
        return (
          <div key={index} className="parent">
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <span>{node.name}</span>
            {node.children && (
              <Checkboxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const NestedCheckBox = () => {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <p>NestedCheckBox</p>
      <Checkboxes
        data={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default NestedCheckBox;
