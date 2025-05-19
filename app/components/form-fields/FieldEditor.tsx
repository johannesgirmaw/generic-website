// export function FieldRenderer({ field, value, onChange }) {
//   switch (field.type) {
//     case "TEXT":
//       return (
//         <input
//           name={field.name}
//           required={field.required}
//           onChange={onChange}
//         />
//       );
//     case "NUMBER":
//       return <input type="number" name={field.name} onChange={onChange} />;
//     case "DROPDOWN":
//       const options = JSON.parse(field.options || "[]");
//       return (
//         <select name={field.name} onChange={onChange}>
//           {options.map((opt) => (
//             <option key={opt} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </select>
//       );
//     case "FILE":
//       return <input type="file" name={field.name} />;
//     case "RECORDER":
//       return <RecorderInput name={field.name} />;
//     case "DATE":
//       return <input type="date" name={field.name} />;
//   }
// }
