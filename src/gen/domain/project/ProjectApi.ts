/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Project } from './Project';
import { AccessRoleApi } from '../access_role/AccessRoleApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { StepApi } from '../step/StepApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { RunApi } from '../run/RunApi';
import { IntegrationProjectApi } from '../integration_project/IntegrationProjectApi';
import { IntegrationApi } from '../integration/IntegrationApi';
import { PlanApi } from '../plan/PlanApi';
import { SuiteApi } from '../suite/SuiteApi';
import { CommentApi } from '../comment/CommentApi';
import { TestApi } from '../test/TestApi';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { WatchApi } from '../watch/WatchApi';
import { DefectApi } from '../defect/DefectApi';
import { RequirementApi } from '../requirement/RequirementApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { PlanSuiteTestIncludeApi } from '../plan_suite_test_include/PlanSuiteTestIncludeApi';
import { FilterApi } from '../filter/FilterApi';

export interface ProjectApi extends Project {
  access_role?: AccessRoleApi;
  label_assigned?: LabelAssignedApi;
  step?: StepApi[];
  run_result?: RunResultApi[];
  run_result_step?: RunResultStepApi[];
  run?: RunApi[];
  integration?: IntegrationApi[];
  integration_id?: number;
  plan?: PlanApi[];
  suite?: SuiteApi[];
  comment?: CommentApi;
  test?: TestApi[];
  milestone?: MilestoneApi[];
  watch?: WatchApi;
  defect?: DefectApi[];
  requirement?: RequirementApi[];
  attachment?: AttachmentApi;
  plan_suite_test_include?: PlanSuiteTestIncludeApi[];
  filter?: FilterApi[];
  pivot?: IntegrationProjectApi;
}
