'use client';

import { ICategory } from '@/core/types';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { TableCellTypes } from '../tables/TableCells';
import BasicTableOne from '../tables/BasicTableOne';
import { useGlobalLoader } from '@/context/GlobalLoaderContext';

interface CategoriesListProps {
  hits?: ICategory[];
  totalHitsCount?: number;
  currentPage?: number;
  pageSize?: number;
  totalPages?: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
}
const CategoriesList: FC<CategoriesListProps> = ({ hits = [], ...rest }) => {
  const headingData: string[] = [
    'Category',
    'Parent Category',
    'Status',
    'SEO Title',
  ];

  const router = useRouter();
  const { start } = useGlobalLoader();

  const goToCategoryDetails = (categoryId: string) =>
    start(() => router.push(`/categories/${categoryId}`));

  const tableData =
    hits?.map((category) => [
      {
        type: TableCellTypes.ProfileCell,
        hasAvatar: false,
        primaryText: category.name,
        secondaryText: category.id,
        onclick: () => goToCategoryDetails(category.id),
      },
      {
        type: category.parentId
          ? TableCellTypes.ProfileCell
          : TableCellTypes.TextCell,
        hasAvatar: false,
        primaryText: category.parentName || 'Un Categorized',
        secondaryText: category.parentId,
        text: 'Root Category',
        onclick: () => category.parentId && goToCategoryDetails(category.parentId || ''),
      },
      {
        type: TableCellTypes.StatusCell,
        status: category.active ? 'Online' : 'Offline',
        color: category.active ? 'success' : 'dark',
      },
      {
        type: TableCellTypes.TextCell,
        text: category.seoTitle || '-',
      },
    ]) || [];

  return (
    <BasicTableOne
      headingData={headingData}
      tableData={tableData}
      pageProps={rest}
      isEmpty={hits.length === 0}
    />
  );
};

export default CategoriesList;
