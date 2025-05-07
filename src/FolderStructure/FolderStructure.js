import { useState } from "react";
import "./FolderStructure.css";

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
            {
              id: "111",
              name: "cover.png",
            },
            {
              id: "112",
              name: "icons",
              isFolder: true,
              nodes: [
                {
                  id: "1121",
                  name: "arrow.svg",
                },
              ],
            },
          ],
        },
        {
          id: "12",
          name: "public_nested_file",
        },
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
            {
              id: "21",
              name: "index.js",
            },
            {
              id: "22",
              name: "index.html",
            },
            {
              id: "23",
              name: "index.css",
            },
          ],
        },
        {
          id: "22",
          name: "main.jsx",
        },
        {
          id: "23",
          name: "App.jsx",
        },
        {
          id: "24",
          name: "app.module.css",
        },
      ],
    },
    {
      id: "3",
      name: "dist",
      isFolder: true,
      nodes: [
        {
          id: "31",
          name: "index.js",
        },
        {
          id: "32",
          name: "index.html",
        },
        {
          id: "33",
          name: "index.css",
        },
      ],
    },
    {
      id: "4",
      name: "package.json",
      nodes: [],
    },
    {
      id: "5",
      name: "package-lock.json",
      nodes: [],
    },
  ],
};

// const ChangeFolderStructure = ({ data, nodes }) => {
//   const updateChildren = (node) => {
//     node.nodes?.forEach((child) => {
//       child.nodes && updateChildren(child);
//     });
//   };
//   updateChildren(nodes);
//   return (
//     <div>
//       {data.nodes.map((item, index) => (
//         <div key={index} className="folderMain">
//           <p> {item.name}</p>
//           {item.nodes && (
//             <ChangeFolderStructure data={fileExplorerData} nodes={nodes} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const FolderStructure = ({ nodes }) => {
  // const [folderData, setFolderData] = useState(fileExplorerData);
  // return (
  //   <div>
  //     <ChangeFolderStructure data={folderData} nodes={nodes} />
  //   </div>
  // );
// };

// export default FolderStructure;

const File = ({ name }) => {
  return <div className="file">📄 {name}</div>;
};

const Folder = ({ name, children, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="folder">
      <div className="folder-header" onClick={() => setOpen(!open)}>
        {open ? "📂" : "📁"} {name}
      </div>
      {open && <div className="folder-content">{children}</div>}
    </div>
  );
};

const FolderStructureRenderer = ({ data }) => {
  if (!data.nodes) {
    return <File name={data.name} />;
  }

  return (
    <Folder name={data.name}>
      {data.nodes.map((item) => (
        <FolderStructureRenderer key={item.id} data={item} />
      ))}
    </Folder>
  );
};

const FolderStructure = () => {
  const [explorerData] = useState(fileExplorerData);

  return (
    <div className="file-explorer">
      <FolderStructureRenderer data={explorerData} />
    </div>
  );
};

export default FolderStructure;
