import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'registers.create': { paramsTuple?: []; params?: {} }
    'registers.store': { paramsTuple?: []; params?: {} }
    'videos.create': { paramsTuple?: []; params?: {} }
    'videos.store': { paramsTuple?: []; params?: {} }
    'videos.index': { paramsTuple?: []; params?: {} }
    'videos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'videos.admin_index': { paramsTuple?: []; params?: {} }
    'videos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'users_admin.index': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'registers.create': { paramsTuple?: []; params?: {} }
    'videos.create': { paramsTuple?: []; params?: {} }
    'videos.index': { paramsTuple?: []; params?: {} }
    'videos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'videos.admin_index': { paramsTuple?: []; params?: {} }
    'users_admin.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'registers.create': { paramsTuple?: []; params?: {} }
    'videos.create': { paramsTuple?: []; params?: {} }
    'videos.index': { paramsTuple?: []; params?: {} }
    'videos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'videos.admin_index': { paramsTuple?: []; params?: {} }
    'users_admin.index': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'registers.store': { paramsTuple?: []; params?: {} }
    'videos.store': { paramsTuple?: []; params?: {} }
    'videos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}