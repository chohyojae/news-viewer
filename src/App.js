import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
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
