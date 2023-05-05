# Section-7:-
1.Made card component structure<br>
2.Card component styling<br>
3.Grid layout for card<br>
4.Learn Glassmorphism css<br>
5.Pre rendering:- using static site generation. We can implement Static site generation for pre rendering the data in two ways:-<br>
i)Without external data<br>
<br>
-getStaticProps:-<br>
  It can only be exported a page file.<br>
  Meant for all routes.<br>
  
 Characteristics of getStaticProps:-<br>
 
  1.Only runs on build time<br>
  2.Only runs on server side<br>
  3.Would not be included in client bundle<br>
  4.On dev, runs on client and server side<br>
<br>
export async function getStaticProps(context) {<br>
  return {<br>
    props: {}, // will be passed to the page component as props<br>
  }<br>
}<br>
<br>
ii)With external data<br>
6.Implemented getStaticPaths<br>
7.Fallback<br>

