async function GetJson(url) {
  const res = await fetch(url);
  const data = await res.json();
  
  return data;
}

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. */
const res1 = await GetJson('https://learn.codeit.kr/api/avatars');// 여기에 코드를 작성하세요.
console.log(res1);

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. 쿼리 파라미터로 offset을 5, limit을 10으로 설정하세요. */
const url = new URL('https://learn.codeit.kr/api/avatars');
url.searchParams.append('offset', 5);
url.searchParams.append('limit', 10);

const res2 = await GetJson(url);// 여기에 코드를 작성하세요.
console.log(res2);

/* https://learn.codeit.kr/api/avatars/:id에 GET 리퀘스트를 보내세요. id를 7로 설정하세요. */
//const res3 = // 여기에 코드를 작성하세요.
const id = 7;
const res3 = await GetJson('https://learn.codeit.kr/api/avatars/7');
console.log(res3);