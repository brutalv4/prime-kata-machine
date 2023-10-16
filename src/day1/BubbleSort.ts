export default function bubble_sort(arr: number[]): void {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 1; j < i; j++) {
            if (arr[j - 1] <= arr[j]) {
                continue;
            }

            const tmp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = tmp;
        }
    }
}
