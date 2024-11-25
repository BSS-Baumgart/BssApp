import React from "react";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";
import { MegaMenu } from "primereact/megamenu";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    { label: "Dashboard", command: () => navigate("/dashboard") },
    {
      label: "Clients",
      items: [
        { label: "Add Client", command: () => navigate("/clients/add") },
        { label: "Remove Client", command: () => navigate("/clients/remove") },
        { label: "Client List", command: () => navigate("/clients/list") },
      ],
    },
    {
      label: "Customers",
      icon: "pi pi-user",
      template: "",
      items: [
        {
          label: "Add Customer",
          icon: "pi pi-user-plus",
          command: () => navigate("/customers/add"),
        },
        {
          label: "Remove Customer",
          icon: "pi pi-user-minus",
          command: () => navigate("/customers/remove"),
        },
        {
          label: "Customer List",
          icon: "pi pi-users",
          command: () => navigate("/customers/list"),
        },
      ],
    },
    {
      label: "Tasks",
      icon: "pi pi-list",
      items: [
        { label: "Add Task", command: () => navigate("/tasks/add") },
        { label: "Remove Task", command: () => navigate("/tasks/remove") },
        { label: "Task List", command: () => navigate("/tasks/list") },
      ],
    },
    {
      label: "Files",
      icon: "pi pi-file-pdf",
      command: () => navigate("/files"),
    },
    { label: "Invoices", command: () => navigate("/invoices") },
  ];

  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
        style={{ borderRadius: "3rem" }}
      />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
        size="large"
      />
    </div>
  );
  return (
    <div className="card" style={{ padding: "2rem", marginBottom: "1rem" }}>
      <MegaMenu
        model={items}
        end={end}
        orientation="horizontal"
        className="p-3 surface-0 shadow-2"
        style={{ borderRadius: "3rem" }}
      />
    </div>
  );
};

export default Navbar;
