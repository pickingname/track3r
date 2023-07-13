export const weeklyDatas = [2, 1, 1, 0, 0, 0, 0, 3];
export const chartgridcolor = '#909090';
export const version = '1.0.5';

export const weeklyAverage = weeklyDatas.reduce((acc, curr) => acc + curr, 0) / weeklyDatas.length;