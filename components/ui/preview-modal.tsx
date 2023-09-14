"use client";

import usePreviewModal from "@/hooks/useModal";
import Modal from "./Modal";
import Gallery from "./Gallery";
import ProductInfo from "@/components/product/ProductInfo";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state?.data);
  if (!product) return null;

  return (
    <Modal onClose={previewModal.onClose} isOpen={previewModal.isOpen}>
      <div className="grid w-full grid-cols-2 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
