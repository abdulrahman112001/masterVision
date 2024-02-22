import { t } from "i18next";
import { useMemo, useState } from "react";
import { useFetch, useIsRTL } from "../../../../hooks";
import { pagePaginate } from "../../../../utils/helpers";
import NextPaginationIc from "../../../atoms/icons/NextPaginationIc";
import PreviousPage from "../../../atoms/icons/PreviousPage";
import { AddButton } from "../../../molecules/AddButton";
import Paginate from "../../../molecules/table/Paginate";
import { Table } from "../../../organisms/tantable/Table";
import { AllActivityAPI_TP } from "./Types&Validation";
import { generateColumns } from "./generateColumns";

function MainActivityLogs() {
  const [page, setPage] = useState(0);
  const [pagePagination, setPagePagination] = useState(pagePaginate);
  const isRTL = useIsRTL();

  const queryParams = {
    page: page,
    paginate: pagePagination,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `master-data/activity-logs?${searchParams.toString()}`;
  const { data, refetch, isSuccess, isFetching, isLoading } =
    useFetch<AllActivityAPI_TP>({
      endpoint: endpoint,
      queryKey: [endpoint],
      enabled: !!page,
    });

  const columns = useMemo(() => generateColumns(page, refetch), [page, isRTL]);
  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };
  return (
    <div>
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

export default MainActivityLogs;
