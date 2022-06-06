/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<35ba92a91e7a4add81676cab645a1334>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import queryCounterNoFragmentResolver from "../../../relay-runtime/store/__tests__/resolvers/LiveCounterNoFragment.js";
// Type assertion validating that `queryCounterNoFragmentResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryCounterNoFragmentResolver: () => mixed);
export type LiveResolversTest11Query$variables = {||};
export type LiveResolversTest11Query$data = {|
  +counter_no_fragment: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof queryCounterNoFragmentResolver>["read"]>,
|};
export type LiveResolversTest11Query = {|
  response: LiveResolversTest11Query$data,
  variables: LiveResolversTest11Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LiveResolversTest11Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "fragment": null,
        "kind": "RelayLiveResolver",
        "name": "counter_no_fragment",
        "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/LiveCounterNoFragment.js'),
        "path": "counter_no_fragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LiveResolversTest11Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "68c3cfa6ba8bc578cc39b3e0b83b9798",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest11Query",
    "operationKind": "query",
    "text": "query LiveResolversTest11Query {\n  __typename\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "31cc74cf61a3f60989818a57fb2b57e9";
}

module.exports = ((node/*: any*/)/*: Query<
  LiveResolversTest11Query$variables,
  LiveResolversTest11Query$data,
>*/);
