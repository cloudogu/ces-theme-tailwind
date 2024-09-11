export function calculateStartEntry(page: number, linesPerPage: number, allLineCount: number): number | undefined {
    const start = page * linesPerPage + 1 - linesPerPage;

    if (!allLineCount || !linesPerPage || !page || start > allLineCount || (linesPerPage < 0 && page !== 1)) {
        return undefined;
    }

    if (linesPerPage < 0) {
        return 1;
    }

    return start;
}

export function calculateEndEntry(page: number, linesPerpage: number, allLineCount: number): number | undefined {
    const end = Math.min(page * linesPerpage, allLineCount);

    if (!allLineCount || !linesPerpage || !page || (linesPerpage < 0 && page !== 1) || (linesPerpage >= allLineCount && page != 1)) {
        return undefined;
    }

    if (linesPerpage < 0 || linesPerpage > allLineCount) {
        return allLineCount;
    }

    return end;
}

export function getPageCount(entriesPerPage: number, allEntries: number): number {
    if (allEntries <= 1 || entriesPerPage <= 0) return 1;
    return Math.ceil(allEntries / entriesPerPage);
}

export function normalizePage(page: number, maxPage: number) {
    return Math.max(Math.min(page, maxPage), 1);
}
