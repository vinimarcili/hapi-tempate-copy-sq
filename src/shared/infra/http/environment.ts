import * as dotenv from 'dotenv'
import path from 'path'

if (!!process.env.NODE_ENV) {
  dotenv.config({
    path: path.resolve(__dirname, '..', '..', '..', '..', 'env', `${process.env.NODE_ENV}.env`)
  })
} else {
  dotenv.config({
    path: path.resolve(__dirname, '..', '..', '..', '.env')
  })
}

interface IProcessEnv {
  API_TWITTER?: string
  APPOPTICS_SERVICE_KEY?: string
  AUTH0_SQUIDHUB_CLIENT_ID?: string
  AUTH0_SQUIDHUB_CLIENT_SECRET?: string
  AUTH0_SQUID_ADM_CLIENT_ID?: string
  AUTH0_SQUID_ADM_CLIENT_SECRET?: string
  AUTH0_SQUID_ADM_DOMAIN?: string
  AUTH0_SQUID_CLIENT_ID?: string
  AUTH0_SQUID_CLIENT_SECRET?: string
  BIGQUERY_MLABS_DATASET?: string
  BIGQUERY_MLABS_TABLE?: string
  BIGQUERY_SEARCH_INTERATIONS_TABLE?: string
  BIGQUERY_SEARCH_RESULTS_TABLE?: string
  BIGQUERY_SEARCH_RESULTS_YOUTUBE_TABLE?: string
  BIGQUERY_SEARCH_STATISTICS_DATASET?: string
  BIGQUERY_SEARCH_TABLE?: string
  BIGQUERY_SEARCH_YOUTUBE_TABLE?: string
  CACHE_HOST?: string
  CACHE_PASSWORD?: string
  CACHE_PORT?: string
  CONTAINER_PORT?: string
  DAREDEVIL_API_URL?: string
  DD_AGENT_HOST?: string
  DD_ENV?: string
  DD_LOGS_INJECTION?: string
  DOMAINS_ALLOWED?: string
  DRIVER_FELICITY?: string
  EAPM_SECRET_TOKEN?: string
  EAPM_SERVER_URL?: string
  ELASTIC_APM_ACTIVE?: string
  ELASTIC_LOG_PASSWORD?: string
  ELASTIC_LOG_URL?: string
  ELASTIC_LOG_USER?: string
  ELEKTRA_API_URL?: string
  ES_INDEX_INFLUENCERS?: string
  ES_PASSWORD?: string
  ES_URL?: string
  ES_USER?: string
  FACEBOOK_APP_ID?: string
  FACEBOOK_APP_SECRET?: string
  GANDALF_API_URL?: string
  GCE_AUTH_JSON_FILENAME?: string
  GCE_BUCKET_NAME_DS?: string
  GCE_BUCKET_NAME_FB?: string
  GCE_BUCKET_NAME_YT?: string
  GCE_CLUSTER_PROJECT?: string
  GCE_STORAGE_PROFILE_BUCKET?: string
  GC_PLACES_KEY?: string
  GOOGLE_CLIENT_ID?: string
  GOOGLE_CLIENT_SECRET?: string
  HEIMDALL_API_URL?: string
  INGRESS_DOMAIN?: string
  INGRESS_DOMAIN_PROTOCOL?: string
  MAX_CATEGORIES?: string
  METAMORPHO_API_URL?: string
  MLABS_IMAGE_LOCATION?: string
  MLABS_LEAD_LOCATION?: string
  MLABS_LEAD_REDIRECT_URL?: string
  MLABS_TRACKING_PROFILE_LOCATION?: string
  MYSQL_DATABASE?: string
  MYSQL_HOST?: string
  MYSQL_HOST_READ?: string
  MYSQL_PASSWORD?: string
  MYSQL_USERNAME?: string
  NODE_ENV?: string
  NODE_TLS_REJECT_UNAUTHORIZED?: string
  PINTEREST_CLIENT_ID?: string
  PINTEREST_CLIENT_SECRET?: string
  PROFILE_PICTURE_BUCKET_NAME?: string
  PROTECTED_FIELDS?: string
  PUBSUB_DELETE_ES_TOPIC?: string
  PUBSUB_EMAIL_TOPIC?: string
  PUBSUB_GAMBIT_TOPIC?: string
  PUBSUB_INSIGHTS_TOPIC?: string
  PUBSUB_PROFILE_TOPIC?: string
  PUBSUB_SABRETOOTH_TOPIC?: string
  PUBSUB_SHADOWCAT_TOPIC?: string
  PUBSUB_TWITTER_TOPIC?: string
  ROLES_ACCEPTED?: string
  SHE_HULK_API_URL?: string
  SPIDERMAN_API_URL?: string
  SQUID_API_TOKEN?: string
  SQUID_DATA_API_URL?: string
  SQUID_ORG_ID?: string
  THOR_API_URL?: string
  TIO_PATINHAS_API_URL?: string
  TRANSFEERA_API_URL?: string
  TRANSFEERA_CLIENT_ID?: string
  TRANSFEERA_CLIENT_SECRET?: string
  TRANSFEERA_LOGIN_URL?: string
  TYPEFORM_API_URL?: string
  TYPEFORM_TOKEN?: string
  ULTRON_API_URL?: string
  MONGODB_NAME?: string
  MONGODB_URI?: string
}

const processEnv = (process.env || {}) as unknown as Partial<IProcessEnv>;

export { processEnv }