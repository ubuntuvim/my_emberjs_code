// app/routes/protected.js

import Ember from 'ember';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

// 实现AuthenticatedRouteMixin的类会自动根据权限过滤，如果经过登录页面直接进入这个route会自动跳转到登录页面
export default Ember.Route.extend(AuthenticatedRouteMixin, {
});
