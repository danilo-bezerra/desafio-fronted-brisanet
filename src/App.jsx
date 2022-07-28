import { useEffect, useState } from "react";
import { AddressModal } from "./components/AddressModal";
import { ComicList } from "./components/ComicList";
import { ComicModal } from "./components/ComicModal";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { Modal } from "./components/Modal";
import { GlobalContext } from "./contexts/GlobalContext";
import getComicList from "./utils/getComicList";

function App() {
  const [comicList, setComicList] = useState(null);
  const [modalComic, setModalComic] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showComicModal, setShowComicModal] = useState(false);
  const [address, setAddress] = useState(null);

  function handleSetModalComic(comic) {
    if (comic) {
      setShowComicModal(true);
    }
    setModalComic(comic);
  }

  function handleChangeShowComicModal() {
    setShowComicModal((value) => !value);
  }

  function handleChangeShowMapModal() {
    setShowMapModal((value) => !value);
  }

  function changeAddress(address) {
    setAddress(address);
  }

  useEffect(() => {
    async function fetchComicList() {
      setIsLoading(true);
      await getComicList(setComicList);
      setIsLoading(false);
    }

    fetchComicList();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
        comicList,
        modalComic,
        address,
        changeAddress,
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
