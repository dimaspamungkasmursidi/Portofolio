// const Input = () => {
//     return ( 
//         <>
//         {/* ABAIKEUN */}
//         {/* Modal Button */}
//         <div
//           className="flex fle items-center cursor-pointer border-2 border-zinc-500"
//           onClick={() => document.getElementById("item").showModal()}
//         ></div>{" "}
//         <br />
//         <br />
//         {/* Card */}
//         <div className="grid grid-cols-5 gap-2">
//           {items.map((item) => (
//             <Card key={item.id}>
//               <Card.Image image={item.image} />
//               <Card.Title
//                 level={item.level}
//                 title={item.title}
//                 description={item.description}
//               />
//             </Card>
//           ))}
//         </div>
//         {/* Modal Content */}
//         <dialog id="item" className="modal" onClick={(e) => e.target.close()}>
//           <div
//             className="modal-box bg-primary rounded"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <form method="dialog">
//               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                 ✕
//               </button>
//             </form>
//             <h3 className="font-bold text-lg mb-6">Hello there!</h3>
//             <p className="font-montserrat text-1">pp</p>
//           </div>
//         </dialog>
//         </>
//      );
// }

// export default Input;

