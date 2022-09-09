// import {getObjectInfo} from './utils/getObjectInfo'
// import {Templator} from './utils/Templator'
// const obj = {
//   user: {
//     isPoet: true,
//     info: {
//       firstName: "Alexander",
//       lastName: "Pushkin"
//     }
//   }
// };

// const testTempl = `
// <div>
//         {{ field12 }}
//         <span>{{field2}}</span>
//         <span>{{ field3.info.name }}</span>
//         <ul class="people_list">
//           {{[forEach] people}}
//             <li>{{this}}</li>
//           {{[/forEach]}}
//         </ul>
//         <button>{{field4}}</button>
// </div>
// `;
// const context = {
//   field12: "Text 1",
//   field2: 42,
//   field3: {
//     info: {
//       name: "Simon"
//     }
//   },
//   field4:'Нажми меня'
  
// };

// const tmpl = new window.Templator(testTempl)
// console.log(tmpl)
// const renderedTemplate = tmpl.compile(context)
// console.log(renderedTemplate)
// document.body.innerHTML = renderedTemplate


