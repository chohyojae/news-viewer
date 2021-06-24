import React, { useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
};

// const App = () => {
//   const [data, setData] = useState(null);

//   const key = newsApiKey();
//   const url =
//     'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=' +
//     key;

//   const onClick = async () => {
//     try {
//       const response = await axios.get(url);

//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />
//       )}
//     </div>
//   );
// };

export default App;
