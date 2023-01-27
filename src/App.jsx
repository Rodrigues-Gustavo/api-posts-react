import { useState, useMemo} from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import  Post  from './components/Post/Post';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Loading from './components/Loading/Loading';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 200px;
  padding-top: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
`;

const getPosts = async ( { pageParam, title = ""}) => {
  const titleParam = title ? `&title=${title.toLowerCase()}` : "";

  return await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}${titleParam}`
  ).then((res) => res.json());
};

const App = () => {
  const [title, setTitle] = useState("");

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["/posts", [title]],
    ({ pageParam = 1}) => getPosts({ pageParam, title }),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      }
    }
  );

  const items = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, [])
  }, [data]);

  return (
    <Container>
      <Input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Filtre por um título"
      />
      <Content>
        {items?.map((item, i) => (
          <Post key={i} item={item}/>
        ))}
      </Content>

      {( isLoading || isFetchingNextPage ) && <Loading />}

      {hasNextPage && !title && (
        <Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "carregando" : "Carregar mais"}
        </Button>
      )}
    </Container>
  )
}

export default App;