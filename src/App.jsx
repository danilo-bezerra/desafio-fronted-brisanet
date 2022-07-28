import { useEffect, useState } from "react";
import { AddressModal } from "./components/AddressModal";
import { ComicList } from "./components/ComicList";
import { ComicModal } from "./components/ComicModal";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { Modal } from "./components/Modal";
import { GlobalContext } from "./contexts/GlobalContext";
import { api, md5Hash, publicKey, timeStamp } from "./services/api";

function App() {
  const [comicList, setComicList] = useState(null);
  const [modalComic, setModalComic] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showComicModal, setShowComicModal] = useState(false);

  function handleSetModalComic(comic) {
    if (comic) {
      setShowComicModal(true)
    }
    setModalComic(comic);
  }

  function handleChangeShowComicModal() {
    setShowComicModal((value) => !value);
  }

  function handleChangeShowMapModal() {
    setShowMapModal((value) => !value);
  }

  useEffect(() => {
    async function fetchComicList() {
      setIsLoading(true);
      const res = await api.get(
        `/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${md5Hash}&orderBy=title&limit=30`
      );
      setIsLoading(false);
      setComicList(res.data.data);
    }

    fetchComicList();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        comicList,
        modalComic,
        setIsLoading,
        setComicList,
        handleSetModalComic,
        handleChangeShowComicModal,
        handleChangeShowMapModal,
      }}
    >
      <section className="App">
        <Header changeShowMapModal={handleChangeShowMapModal} />
        <ComicList />

        {showComicModal && <ComicModal />}
        {showMapModal && (
          <AddressModal changeModalVisible={handleChangeShowMapModal} />
        )}
      </section>
    </GlobalContext.Provider>
  );
}

export default App;
