/*
 * @Author: your name
 * @Date: 2021-08-27 13:29:34
 * @LastEditTime: 2021-08-27 13:57:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Centrapass\petstore\src\util\provideSingleton.ts
 */
import { fluentProvide } from "inversify-binding-decorators";
import { interfaces } from "inversify";

export const provideSingleton = function <T>(
  identifier: interfaces.ServiceIdentifier<T>
) {
  return fluentProvide(identifier).inSingletonScope().done();
};