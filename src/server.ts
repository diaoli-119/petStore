/*
 * @Author: your name
 * @Date: 2021-08-22 13:40:49
 * @LastEditTime: 2021-08-23 20:32:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Centrapass\petstore\src\petService.ts
 */
import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Petstore server is listening at http://localhost:${port}`);
})
