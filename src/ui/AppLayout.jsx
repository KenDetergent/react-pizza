import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  // 現在の遷移の進行情報をidle, loading, submittingの値でもつReactの標準メソッド
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader></Loader>}
      <Header></Header>
      <main>
        <h1>h1 main content</h1>
        <Outlet></Outlet>
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
