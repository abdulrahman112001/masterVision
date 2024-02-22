import { t } from "i18next";
import { useMemo, useState } from "react";
import { useFetch, useIsRTL } from "../../../../hooks";
import { pagePaginate } from "../../../../utils/helpers";
import NextPaginationIc from "../../../atoms/icons/NextPaginationIc";
import PreviousPage from "../../../atoms/icons/PreviousPage";
import { AddButton } from "../../../molecules/AddButton";
import { ModalTemplate } from "../../../molecules/ModalTemplate";
import Paginate from "../../../molecules/table/Paginate";
import { Table } from "../../../organisms/tantable/Table";
import { generateColumns } from "./generateColumns";
import { AllRolesAPI_TP } from "./Types&Validation";
import AddSupplier from "./AddSupplier";

function MainSupplier() {
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pagePagination, setPagePagination] = useState(pagePaginate);
  const [MainData, setMainData] = useState({});
  const isRTL = useIsRTL();

  const queryParams = {
    page: page,
    paginate: pagePagination,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `master-data/suppliers?${searchParams.toString()}`;
  const { data, refetch, isSuccess, isFetching, isLoading } =
    useFetch<AllRolesAPI_TP>({
      endpoint: endpoint,
      queryKey: [endpoint],
      onSuccess: () => {
        setIsModalOpen(false);
      },
      enabled: !!page,
    });

  const columns = useMemo(
    () => generateColumns(page, refetch, setIsModalOpen, setMainData),
    [page , isRTL]
  );
  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };
  return (
    <div>
      <div className=" flex justify-end items mb-4">
        <div className="">
          <AddButton
            action={() => {
              setIsModalOpen(true);
              setMainData({});
            }}
            addLabel={`${t("Add")}`}
          />
        </div>
      </div>
      <ModalTemplate
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <AddSupplier refetch={refetch} update={MainData} data={data?.data?.data} />
      </ModalTemplate>

      <Table
        data={data?.data?.data || []}
        setPagePagination={setPagePagination}
        columns={columns}
        columnsToRemove={[7]}
        isSuccess={isSuccess}
        isFetching={isFetching}
        isLoading={isLoading}
      />
      <div className="flex justify-end mt-3">
        <Paginate
          pagesCount={data?.data?.lastPage}
          previousLabel={<PreviousPage />}
          nextLabel={<NextPaginationIc />}
          onPageChange={handlePageChange}
          initialPage={page}
        />
      </div>
    </div>
  );
}

export default MainSupplier;
