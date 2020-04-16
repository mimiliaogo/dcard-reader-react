# dcard-reader-react
## Getting Started

```sh
npm install
npm run start
```
Now open http://localhost:8080


## Implementation

### Mock 
![](https://i.imgur.com/TG7dIx6.png)

### Design Architecture
#### BoardCard Rendering
![](https://i.imgur.com/PH5dFz3.png)
> 隨著捲軸滾動，文章會load進越來越多。因此在 Board.jsx 裡 keep 動態增長的array, 存在state裡，以props的方式傳給BoardCard。
當API呼叫時，再去更新array。
#### 判斷何時呼叫Dcard API load 進更多文章
![](https://i.imgur.com/kGDdXTg.png)
> 判斷當使用者滑到底時要呼叫API, 但因為CSS的設定讓滑到底沒有一個確切的值來判斷，因此用一個範圍來界定。因此設定一個isLoadMore 的state 來避免多餘的呼叫。
另外，state中也保有lastPostId 來紀錄目前最後一個PO文的ID。
#### API 呼叫
> 使用 AJAX 的方式，傳回JSON，再做處理，取id, title, excerpt的資料。
![](https://i.imgur.com/kddHqtl.png)

### Problems I encounterd

* 當我要偵測scrolling這個動作的時候，因為想要在Board.jsx 裡去偵測，因此拉霸在Board裡面。正在思索有沒有辦法在外面scroll, 但讓Board裡面也可以偵測到。