export const weeklyDatas = [2, 1, 1, 0, 0, 0, 0, 3];
export const chartgridcolor = '#455d87';
export const version = '1.0.6';

export const weeklyAverage = weeklyDatas.reduce((acc, curr) => acc + curr, 0) / weeklyDatas.length;