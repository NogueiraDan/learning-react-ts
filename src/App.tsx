import ThemeSwitcher from "./components/Redux/ThemeSwitcher";
import Counter from "./components/Redux/Counter";

const App: React.FC = () => {
  return (
    <>
    <h1>Estados com Redux</h1> 
    <br/>
    <ThemeSwitcher/>
    <br/>
    <Counter/>
    </>
  );
};

export default App;

// import React from 'react';
// import "./styles/styles.css"
// import { AuthProvider, useAuth } from "./contexts/AuthContext";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import Login from "./components/Login";
// import Admin from "./components/Admin";

// // Metodo que controla a renderização do Componente.
// // Pois precisa do useAuth dentro do Provider
// const AuthWrapper: React.FC = () => {
//   const { email } = useAuth();
//   return email ? <Admin /> : <Login />;
// };

// const App: React.FC = () => {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <AuthWrapper />
//       </AuthProvider>
//     </ThemeProvider>
//   );
// };
// export default App;

// import React from "react";
// import { lazy, Suspense } from "react";
// import ReducerComponent from "./components/Hooks/ReducerComponent";
// import RefComponent from "./components/Hooks/RefComponent";
// import CallbackComponent from "./components/Hooks/CallbackComponent";
// const LazyComponent = lazy(()=>import("./components/LazyLoad/LazyComponent"));
// const DataComponent = lazy(()=>import("./components/LazyLoad/Data"));

// const App: React.FC = () => {

//   return (
//     <div>
//     <h1>Página Inicial</h1><br/>
//     <p>Exemplos de uso do Reducer</p>
//     <ReducerComponent/>
//     <br/>
//     <p>Exemplos de uso do Ref</p>
//     <RefComponent/>
//     <br/>
//     <p>Exemplos de uso do Callback</p>
//     <CallbackComponent/>
//     <p>Exemplo de uso de Lazy Load</p>
//     <Suspense fallback={<div><h1>Carregando...</h1></div>}>
//       {/* <DataComponent /> */}
//       <LazyComponent/>
//     </Suspense>
//   </div>
//   );
// };
// export default App;

// TUTORIAL APRENDENDO TYPESCRIPT COM REACT
// import { useState } from "react";
// import "./App.css";
// type TypographyProps = {
//   children: React.ReactNode;
//   size?: "small" | "large";
// };

// type ParagraphProps = {
//   color: string;
// };

// // Dando Merge de Types no Componente
// const Paragraph = ({
//   children,
//   size,
//   color,
// }: TypographyProps & ParagraphProps) => {
//   return (
//     <h1
//       style={{
//         fontSize: size === "small" ? "1.5rem" : "3rem",
//         color: color,
//       }}
//     >
//       {children}
//     </h1>
//   );
// };

// const Title = ({ children, size }: TypographyProps) => {
//   return (
//     <h1
//       style={{
//         fontSize: size === "small" ? "1.5rem" : "3rem",
//       }}
//     >
//       {children}
//     </h1>
//   );
// };

// // Extraindo tipos de Objetos
// const user = {
//   id: 1,
//   name: "John Doe",
//   age: 30,
//   isAdmin: true,
//   birthDate: new Date("1980-01-01"),
// };

// type UserAttributes = typeof user;

// const Daniel: UserAttributes ={
//   age: 20,
//   birthDate: new Date("1999-12-02"),
//   isAdmin: true,
//   id: 123456,
//   name: "Daniel"
// }

// function sumNumbers(a: number, b: number) {
//   return a + b;
// }

// // Conceito de tipagem dinamicamente: <Generics>
// function List<ItemType>({
//   items,
//   render,
// }: {
//   items: ItemType[];
//   render: (item: ItemType, index: number) => React.ReactNode;
// }) {
//   return (
//     <ul>
//       {items.map((item, index) => {
//         return render(item, index);
//       })}
//     </ul>
//   );
// }

// function App() {
//   const [count, setCount] = useState<number | null>(null);

//   if (count !== null) {
//     return <div>{count}</div>;
//   }

//   const items = [
//     {
//       code: 1,
//       name: "John Doe",
//     },
//     {
//       code: 2,
//       name: "Jane Doe",
//     },
//   ];

//   return (
//     <div className="App">
//       <Title>
//         <span>
//           Hello <b>World</b>
//         </span>
//       </Title>

//       <Paragraph color="red" size="small">
//         Eu sou um parágrafo
//       </Paragraph>

//       <List
//         items={items}
//         render={(item, index) => {
//           if (item.code === 1) {
//             return <p>{item.name}</p>;
//           }

//           return <h3>{item.name}</h3>;
//         }}
//       />
//     </div>
//   );
// }
// export default App;
