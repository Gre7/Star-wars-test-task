import { Dispatch, SetStateAction } from 'react';

import { HStack } from '@chakra-ui/react';

import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/shared/ui';
import { PaginationRootProps } from '@/shared/ui/index';

export type SimplePaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
  paginationRootProps?: Partial<PaginationRootProps>;
};

const SimplePagination = ({
  page,
  setPage,
  totalCount,
  paginationRootProps,
}: SimplePaginationProps) => {
  return (
    <PaginationRoot
      count={totalCount}
      pageSize={10}
      page={page}
      onPageChange={(e) => setPage(e.page)}
      {...paginationRootProps}
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default SimplePagination;
