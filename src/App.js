import { Routes, Route } from "../node_modules/react-router/index";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostListPage></PostListPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/write" element={<WritePage></WritePage>}></Route>
        <Route path="/@:usename">
          <Route index element={<PostListPage></PostListPage>}></Route>
          <Route path=":postId" element={<PostPage></PostPage>}></Route>
        </Route>
      </Routes>
    </>
  );
}
