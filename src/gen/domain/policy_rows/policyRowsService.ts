/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

import { _client } from '../../../ClientSdk';
import { getResponse } from '../../actions/getResponse';
import { QueryParams } from '../../actions/QueryParams';
import { MessageResponse } from '../../actions/MessageResponse';
import { ResourceList } from '../../models/ResourceList';
import { PolicyRowsRoute } from '../../routes/Routes';
import { PolicyRows } from './PolicyRows';
import { PolicyRowsApi } from './PolicyRowsApi';

export const policyRowsGetMany = (
  queryParams?: QueryParams<PolicyRows>
): Promise<ResourceList<PolicyRowsApi>> => {
  const config: QueryParams<PolicyRows> = {
    method: 'get',
    url: queryParams?.url || PolicyRowsRoute(),
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<ResourceList<PolicyRowsApi>>(config)
    : getResponse<ResourceList<PolicyRowsApi>, PolicyRows>(
        queryParams?.api || _client?.api,
        config
      );
};

export const policyRowsGetOne = (
  id: number,
  queryParams?: QueryParams<PolicyRows>
): Promise<PolicyRowsApi> => {
  const config: QueryParams<PolicyRows> = {
    method: 'get',
    url: `${queryParams?.url || PolicyRowsRoute()}/${id}`,
    params: queryParams?.params,
    cancelToken: queryParams?.cancelToken,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyRowsApi>(config)
    : getResponse<PolicyRowsApi, PolicyRows>(
        queryParams?.api || _client?.api,
        config
      );
};

export const policyRowsDeleteOne = (
  id: number,
  queryParams?: QueryParams<PolicyRows>
): Promise<MessageResponse> => {
  const config: QueryParams<PolicyRows> = {
    method: 'delete',
    url: `${queryParams?.url || PolicyRowsRoute()}/${id}`,
    params: queryParams?.params,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<MessageResponse>(config)
    : getResponse<MessageResponse, PolicyRows>(
        queryParams?.api || _client?.api,
        config
      );
};

export const policyRowsUpdateOne = (
  id: number,
  data: Partial<PolicyRows>,
  queryParams?: QueryParams<PolicyRows>
): Promise<PolicyRows> => {
  const config: QueryParams<PolicyRows> = {
    method: 'put',
    url: `${queryParams?.url || PolicyRowsRoute()}/${id}`,
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyRows>(config)
    : getResponse<PolicyRows>(queryParams?.api || _client?.api, config);
};

export const policyRowsCreateOne = (
  data: Partial<PolicyRows>,
  queryParams?: QueryParams<PolicyRows>
): Promise<PolicyRows> => {
  const config: QueryParams<PolicyRows> = {
    method: 'post',
    url: queryParams?.url || PolicyRowsRoute(),
    params: queryParams?.params,
    data,
  };

  return queryParams?.batch
    ? queryParams.batch.addBatch<PolicyRows>(config)
    : getResponse<PolicyRows>(queryParams?.api || _client?.api, config);
};
