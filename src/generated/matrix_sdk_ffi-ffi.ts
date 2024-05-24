import { type UniffiRustFutureContinuationCallback } from 'uniffi-bindgen-react-native/async-rust-call';
import { type UniffiRustCallStatus } from 'uniffi-bindgen-react-native/rust-call';

interface NativeModuleInterface {
  uniffi_internal_fn_func_ffi__string_to_byte_length(
    string: string,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_internal_fn_func_ffi__string_to_arraybuffer(
    string: string,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_internal_fn_func_ffi__arraybuffer_to_string(
    buffer: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): string;
  uniffi_matrix_sdk_ffi_fn_clone_mediasource(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_mediasource(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json(
    json: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_mediasource_url(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions(
    ptr: bigint,
    mentions: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_authenticationservice(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_authenticationservice(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_constructor_authenticationservice_new(
    basePath: ArrayBuffer,
    passphrase: ArrayBuffer,
    userAgent: ArrayBuffer,
    additionalRootCertificates: ArrayBuffer,
    proxy: ArrayBuffer,
    oidcConfiguration: ArrayBuffer,
    customSlidingSyncProxy: ArrayBuffer,
    sessionDelegate: ArrayBuffer,
    crossProcessRefreshLockId: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_authenticationservice_configure_homeserver(
    ptr: bigint,
    serverNameOrHomeserverUrl: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_authenticationservice_homeserver_details(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_authenticationservice_login(
    ptr: bigint,
    username: ArrayBuffer,
    password: ArrayBuffer,
    initialDeviceName: ArrayBuffer,
    deviceId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_authenticationservice_login_with_oidc_callback(
    ptr: bigint,
    authenticationData: bigint,
    callbackUrl: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_authenticationservice_url_for_oidc_login(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_client(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_client(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_client_account_data(
    ptr: bigint,
    eventType: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_account_url(
    ptr: bigint,
    action: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_avatar_url(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_client_create_room(
    ptr: bigint,
    request: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher(
    ptr: bigint,
    identifiers: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_device_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_client_display_name(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_encryption(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room(
    ptr: bigint,
    userId: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_client_get_media_content(
    ptr: bigint,
    mediaSource: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_media_file(
    ptr: bigint,
    mediaSource: bigint,
    body: ArrayBuffer,
    mimeType: ArrayBuffer,
    useCache: number,
    tempDir: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail(
    ptr: bigint,
    mediaSource: bigint,
    width: bigint,
    height: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_profile(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias(
    ptr: bigint,
    roomAlias: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id(
    ptr: bigint,
    roomId: ArrayBuffer,
    viaServers: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_homeserver(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_client_ignore_user(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_ignored_users(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id(
    ptr: bigint,
    roomId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias(
    ptr: bigint,
    roomIdOrAlias: ArrayBuffer,
    serverNames: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_login(
    ptr: bigint,
    username: ArrayBuffer,
    password: ArrayBuffer,
    initialDeviceName: ArrayBuffer,
    deviceId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_logout(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_notification_client(
    ptr: bigint,
    processSetup: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias(
    ptr: bigint,
    roomAlias: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_restore_session(
    ptr: bigint,
    session: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_rooms(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_client_search_users(
    ptr: bigint,
    searchTerm: ArrayBuffer,
    limit: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_session(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_set_account_data(
    ptr: bigint,
    eventType: ArrayBuffer,
    content: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_set_delegate(
    ptr: bigint,
    delegate: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_client_set_display_name(
    ptr: bigint,
    name: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_set_pusher(
    ptr: bigint,
    identifiers: ArrayBuffer,
    kind: ArrayBuffer,
    appDisplayName: ArrayBuffer,
    deviceDisplayName: ArrayBuffer,
    profileTag: ArrayBuffer,
    lang: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_sync_service(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room(
    ptr: bigint,
    room: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_unignore_user(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar(
    ptr: bigint,
    mimeType: ArrayBuffer,
    data: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_upload_media(
    ptr: bigint,
    mimeType: ArrayBuffer,
    data: ArrayBuffer,
    progressWatcher: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_client_user_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_clientbuilder(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_clientbuilder(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new(
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates(
    ptr: bigint,
    certificates: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups(
    ptr: bigint,
    autoEnableBackups: number,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing(
    ptr: bigint,
    autoEnableCrossSigning: number,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy(
    ptr: bigint,
    backupDownloadStrategy: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_base_path(
    ptr: bigint,
    path: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_cross_process_refresh_lock(
    ptr: bigint,
    processId: ArrayBuffer,
    sessionDelegate: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url(
    ptr: bigint,
    url: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_passphrase(
    ptr: bigint,
    passphrase: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy(
    ptr: bigint,
    url: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name(
    ptr: bigint,
    serverName: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url(
    ptr: bigint,
    serverNameOrUrl: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_versions(
    ptr: bigint,
    versions: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate(
    ptr: bigint,
    sessionDelegate: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_proxy(
    ptr: bigint,
    slidingSyncProxy: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent(
    ptr: bigint,
    userAgent: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_clientbuilder_username(
    ptr: bigint,
    username: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_encryption(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_encryption(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery(
    ptr: bigint,
    waitForBackupsToUpload: number,
    progressListener: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_recover(
    ptr: bigint,
    recoveryKey: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset(
    ptr: bigint,
    oldRecoveryKey: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state(
    ptr: bigint,
    progressListener: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_eventtimelineitem(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_eventtimelineitem(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_can_be_replied_to(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_content(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_debug_info(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_event_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_is_editable(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_is_local(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_is_own(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_is_remote(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_local_send_state(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_origin(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_reactions(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_read_receipts(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_sender(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_sender_profile(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_timestamp(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_eventtimelineitem_transaction_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_proxy(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oidc_login(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_mediafilehandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist(
    ptr: bigint,
    path: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_clone_message(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_message(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_message_body(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_message_in_reply_to(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_message_is_edited(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_message_is_threaded(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_message_msgtype(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_notificationclient(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_notificationclient(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification(
    ptr: bigint,
    roomId: ArrayBuffer,
    eventId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_notificationsettings(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_notificationsettings(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode(
    ptr: bigint,
    isEncrypted: number,
    isOneToOne: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings(
    ptr: bigint,
    roomId: ArrayBuffer,
    isEncrypted: number,
    isOneToOne: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules(
    ptr: bigint,
    enabled: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode(
    ptr: bigint,
    roomId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode(
    ptr: bigint,
    roomId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled(
    ptr: bigint,
    enabled: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode(
    ptr: bigint,
    isEncrypted: number,
    isOneToOne: number,
    mode: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate(
    ptr: bigint,
    delegate: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled(
    ptr: bigint,
    enabled: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled(
    ptr: bigint,
    enabled: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode(
    ptr: bigint,
    roomId: ArrayBuffer,
    mode: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled(
    ptr: bigint,
    enabled: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room(
    ptr: bigint,
    roomId: ArrayBuffer,
    isEncrypted: number,
    isOneToOne: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_oidcauthenticationdata(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_oidcauthenticationdata(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_oidcauthenticationdata_login_url(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_room(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_room(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_room_active_members_count(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes(
    ptr: bigint,
    changes: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_avatar_url(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_ban_user(
    ptr: bigint,
    userId: ArrayBuffer,
    reason: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_ban(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_invite(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_kick(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_redact_other(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_redact_own(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_send_message(
    ptr: bigint,
    userId: ArrayBuffer,
    message: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_send_state(
    ptr: bigint,
    userId: ArrayBuffer,
    stateEvent: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_can_user_trigger_room_notification(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_display_name(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_room_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_ignore_user(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_inviter(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_is_direct(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_room_is_public(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_room_is_space(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_room_is_tombstoned(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_room_join(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_kick_user(
    ptr: bigint,
    userId: ArrayBuffer,
    reason: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_leave(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read(
    ptr: bigint,
    receiptType: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink(
    ptr: bigint,
    eventId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_member(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_member_display_name(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_members(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_membership(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_own_user_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_raw_name(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_redact(
    ptr: bigint,
    eventId: ArrayBuffer,
    reason: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_report_content(
    ptr: bigint,
    eventId: ArrayBuffer,
    score: ArrayBuffer,
    reason: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_room_info(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_send_call_notification(
    ptr: bigint,
    callId: ArrayBuffer,
    application: ArrayBuffer,
    notifyType: ArrayBuffer,
    mentions: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_send_call_notification_if_needed(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite(
    ptr: bigint,
    isFavourite: number,
    tagOrder: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority(
    ptr: bigint,
    isLowPriority: number,
    tagOrder: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_set_name(
    ptr: bigint,
    name: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_set_topic(
    ptr: bigint,
    topic: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag(
    ptr: bigint,
    newValue: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user(
    ptr: bigint,
    userId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_timeline(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_timeline_focused_on_event(
    ptr: bigint,
    eventId: ArrayBuffer,
    numContextEvents: number,
    internalIdPrefix: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_topic(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_room_typing_notice(
    ptr: bigint,
    isTyping: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_unban_user(
    ptr: bigint,
    userId: ArrayBuffer,
    reason: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users(
    ptr: bigint,
    updates: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar(
    ptr: bigint,
    mimeType: ArrayBuffer,
    data: ArrayBuffer,
    mediaInfo: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results(
    ptr: bigint,
    listener: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search(
    ptr: bigint,
    filter: ArrayBuffer,
    batchSize: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_roomlist(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_roomlist(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomlist_entries(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters(
    ptr: bigint,
    pageSize: number,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_roomlist_room(
    ptr: bigint,
    roomId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter(
    ptr: bigint,
    kind: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_clone_roomlistitem(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_roomlistitem(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_avatar_url(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_canonical_alias(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_display_name(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_full_room(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_init_timeline(
    ptr: bigint,
    eventTypeFilter: ArrayBuffer,
    internalIdPrefix: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_is_direct(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_is_timeline_initialized(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_latest_event(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_room_info(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_subscribe(
    ptr: bigint,
    settings: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomlistitem_unsubscribe(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_clone_roomlistservice(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_roomlistservice(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistservice_apply_input(
    ptr: bigint,
    input: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room(
    ptr: bigint,
    roomId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator(
    ptr: bigint,
    delayBeforeShowingInMs: number,
    delayBeforeHidingInMs: number,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_roommembersiterator(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk(
    ptr: bigint,
    chunkSize: number,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_is_verified(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_verification(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate(
    ptr: bigint,
    delegate: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_span(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_span(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_constructor_span_current(
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_constructor_span_new(
    file: ArrayBuffer,
    line: ArrayBuffer,
    level: ArrayBuffer,
    target: ArrayBuffer,
    name: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_span_enter(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_span_exit(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_span_is_none(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_clone_syncservice(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_syncservice(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_syncservice_start(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_syncservice_state(
    ptr: bigint,
    listener: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_syncservice_stop(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish(
    ptr: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_cross_process_lock(
    ptr: bigint,
    appIdentifier: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_utd_hook(
    ptr: bigint,
    delegate: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_taskhandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_taskhandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_clone_timeline(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_timeline(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener(
    ptr: bigint,
    listener: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_cancel_send(
    ptr: bigint,
    txnId: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll(
    ptr: bigint,
    question: ArrayBuffer,
    answers: ArrayBuffer,
    maxSelections: number,
    pollKind: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_edit(
    ptr: bigint,
    newContent: bigint,
    editItem: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_edit_poll(
    ptr: bigint,
    question: ArrayBuffer,
    answers: ArrayBuffer,
    maxSelections: number,
    pollKind: ArrayBuffer,
    editItem: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll(
    ptr: bigint,
    pollStartId: ArrayBuffer,
    text: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event(
    ptr: bigint,
    eventId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_focused_paginate_forwards(
    ptr: bigint,
    numEvents: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id(
    ptr: bigint,
    eventId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_get_timeline_event_content_by_event_id(
    ptr: bigint,
    eventId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read(
    ptr: bigint,
    receiptType: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards(
    ptr: bigint,
    numEvents: number
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption(
    ptr: bigint,
    sessionIds: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_retry_send(
    ptr: bigint,
    txnId: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send(
    ptr: bigint,
    msg: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio(
    ptr: bigint,
    url: ArrayBuffer,
    audioInfo: ArrayBuffer,
    caption: ArrayBuffer,
    formattedCaption: ArrayBuffer,
    progressWatcher: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_file(
    ptr: bigint,
    url: ArrayBuffer,
    fileInfo: ArrayBuffer,
    progressWatcher: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_image(
    ptr: bigint,
    url: ArrayBuffer,
    thumbnailUrl: ArrayBuffer,
    imageInfo: ArrayBuffer,
    caption: ArrayBuffer,
    formattedCaption: ArrayBuffer,
    progressWatcher: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_location(
    ptr: bigint,
    body: ArrayBuffer,
    geoUri: ArrayBuffer,
    description: ArrayBuffer,
    zoomLevel: ArrayBuffer,
    assetType: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response(
    ptr: bigint,
    pollStartId: ArrayBuffer,
    answers: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt(
    ptr: bigint,
    receiptType: ArrayBuffer,
    eventId: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply(
    ptr: bigint,
    msg: bigint,
    replyItem: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_video(
    ptr: bigint,
    url: ArrayBuffer,
    thumbnailUrl: ArrayBuffer,
    videoInfo: ArrayBuffer,
    caption: ArrayBuffer,
    formattedCaption: ArrayBuffer,
    progressWatcher: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message(
    ptr: bigint,
    url: ArrayBuffer,
    audioInfo: ArrayBuffer,
    waveform: ArrayBuffer,
    caption: ArrayBuffer,
    formattedCaption: ArrayBuffer,
    progressWatcher: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status(
    ptr: bigint,
    listener: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction(
    ptr: bigint,
    eventId: ArrayBuffer,
    key: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_timelinediff(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_timelinediff(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_append(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_change(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_insert(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_push_back(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_push_front(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_remove(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_reset(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelinediff_set(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_timelineevent(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_timelineevent(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_type(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_timelineeventtypefilter(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_timelineeventtypefilter(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_constructor_timelineeventtypefilter_exclude(
    eventTypes: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_constructor_timelineeventtypefilter_include(
    eventTypes: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_timelineitem(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_timelineitem(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_timelineitemcontent(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_timelineitemcontent(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_timelineitemcontent_as_message(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_method_timelineitemcontent_kind(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  uniffi_matrix_sdk_ffi_fn_clone_widgetdriver(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_widgetdriver(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run(
    ptr: bigint,
    room: bigint,
    capabilitiesProvider: bigint
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle(
    ptr: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv(ptr: bigint): bigint;
  uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send(
    ptr: bigint,
    msg: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id(
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_generate_webview_url(
    widgetSettings: ArrayBuffer,
    room: bigint,
    props: ArrayBuffer
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions(
    ownUserId: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_log_event(
    file: ArrayBuffer,
    line: ArrayBuffer,
    level: ArrayBuffer,
    target: ArrayBuffer,
    message: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_func_make_widget_driver(
    settings: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink(
    roomAlias: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink(
    userId: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_media_source_from_url(
    url: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html(
    body: ArrayBuffer,
    htmlBody: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote(
    body: ArrayBuffer,
    htmlBody: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown(
    md: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote(
    md: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_message_event_content_new(
    msgtype: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget(
    props: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from(
    uri: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha(
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  uniffi_matrix_sdk_ffi_fn_func_setup_tracing(
    config: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role(
    role: ArrayBuffer,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level(
    powerLevel: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  ffi_matrix_sdk_ffi_rust_future_poll_u8(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_u8(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_u8(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_u8(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_i8(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_i8(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_i8(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_i8(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_u16(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_u16(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_u16(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_u16(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_i16(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_i16(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_i16(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_i16(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_u32(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_u32(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_u32(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_u32(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_i32(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_i32(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_i32(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_i32(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_u64(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_u64(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_u64(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_u64(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  ffi_matrix_sdk_ffi_rust_future_poll_i64(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_i64(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_i64(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_i64(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  ffi_matrix_sdk_ffi_rust_future_poll_f32(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_f32(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_f32(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_f32(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_f64(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_f64(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_f64(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_f64(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): number;
  ffi_matrix_sdk_ffi_rust_future_poll_pointer(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_pointer(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_pointer(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_pointer(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): bigint;
  ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_rust_buffer(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): ArrayBuffer;
  ffi_matrix_sdk_ffi_rust_future_poll_void(
    handle: bigint,
    callback: UniffiRustFutureContinuationCallback,
    callbackData: bigint
  ): void;
  ffi_matrix_sdk_ffi_rust_future_cancel_void(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_free_void(handle: bigint): void;
  ffi_matrix_sdk_ffi_rust_future_complete_void(
    handle: bigint,
    uniffi_out_err: UniffiRustCallStatus
  ): void;
  uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id(): number;
  uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url(): number;
  uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions(): number;
  uniffi_matrix_sdk_ffi_checksum_func_log_event(): number;
  uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver(): number;
  uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink(): number;
  uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink(): number;
  uniffi_matrix_sdk_ffi_checksum_func_media_source_from_url(): number;
  uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html(): number;
  uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote(): number;
  uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown(): number;
  uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote(): number;
  uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new(): number;
  uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget(): number;
  uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from(): number;
  uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha(): number;
  uniffi_matrix_sdk_ffi_checksum_func_setup_tracing(): number;
  uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role(): number;
  uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level(): number;
  uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json(): number;
  uniffi_matrix_sdk_ffi_checksum_method_mediasource_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions(): number;
  uniffi_matrix_sdk_ffi_checksum_method_authenticationservice_configure_homeserver(): number;
  uniffi_matrix_sdk_ffi_checksum_method_authenticationservice_homeserver_details(): number;
  uniffi_matrix_sdk_ffi_checksum_method_authenticationservice_login(): number;
  uniffi_matrix_sdk_ffi_checksum_method_authenticationservice_login_with_oidc_callback(): number;
  uniffi_matrix_sdk_ffi_checksum_method_authenticationservice_url_for_oidc_login(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_account_data(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_account_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_create_room(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_device_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_display_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_encryption(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_profile(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_homeserver(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_login(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_logout(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_notification_client(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_restore_session(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_rooms(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_search_users(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_session(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_sync_service(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_upload_media(): number;
  uniffi_matrix_sdk_ffi_checksum_method_client_user_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_base_path(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_cross_process_refresh_lock(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_passphrase(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_versions(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_proxy(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_username(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_recover(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_can_be_replied_to(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_content(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_debug_info(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_event_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_is_editable(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_is_local(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_is_own(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_is_remote(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_local_send_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_origin(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_reactions(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_read_receipts(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_sender(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_sender_profile(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_timestamp(): number;
  uniffi_matrix_sdk_ffi_checksum_method_eventtimelineitem_transaction_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_proxy(): number;
  uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oidc_login(): number;
  uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login(): number;
  uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path(): number;
  uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist(): number;
  uniffi_matrix_sdk_ffi_checksum_method_message_body(): number;
  uniffi_matrix_sdk_ffi_checksum_method_message_in_reply_to(): number;
  uniffi_matrix_sdk_ffi_checksum_method_message_is_edited(): number;
  uniffi_matrix_sdk_ffi_checksum_method_message_is_threaded(): number;
  uniffi_matrix_sdk_ffi_checksum_method_message_msgtype(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room(): number;
  uniffi_matrix_sdk_ffi_checksum_method_oidcauthenticationdata_login_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_ban_user(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_ban(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_invite(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_kick(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_redact_other(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_redact_own(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_send_message(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_send_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_can_user_trigger_room_notification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_display_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_inviter(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_is_direct(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_is_public(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_is_space(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_is_tombstoned(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_join(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_kick_user(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_leave(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_member(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_members(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_membership(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_raw_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_redact(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_report_content(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_room_info(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_send_call_notification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_send_call_notification_if_needed(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_set_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_set_topic(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_timeline(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_timeline_focused_on_event(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_topic(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_unban_user(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users(): number;
  uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlist_room(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_avatar_url(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_canonical_alias(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_display_name(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_full_room(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_init_timeline(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_is_direct(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_is_timeline_initialized(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_latest_event(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_room_info(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_subscribe(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistitem_unsubscribe(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_apply_input(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_is_verified(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_verification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol(): number;
  uniffi_matrix_sdk_ffi_checksum_method_span_enter(): number;
  uniffi_matrix_sdk_ffi_checksum_method_span_exit(): number;
  uniffi_matrix_sdk_ffi_checksum_method_span_is_none(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservice_start(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservice_state(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_cross_process_lock(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_utd_hook(): number;
  uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel(): number;
  uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_cancel_send(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_edit(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_edit_poll(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_focused_paginate_forwards(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_get_timeline_event_content_by_event_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_send(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_append(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_change(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_insert(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_push_back(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_push_front(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_remove(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_reset(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinediff_set(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_type(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineitemcontent_as_message(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelineitemcontent_kind(): number;
  uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications(): number;
  uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count(): number;
  uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count(): number;
  uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run(): number;
  uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv(): number;
  uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send(): number;
  uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json(): number;
  uniffi_matrix_sdk_ffi_checksum_constructor_authenticationservice_new(): number;
  uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new(): number;
  uniffi_matrix_sdk_ffi_checksum_constructor_span_current(): number;
  uniffi_matrix_sdk_ffi_checksum_constructor_span_new(): number;
  uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventtypefilter_exclude(): number;
  uniffi_matrix_sdk_ffi_checksum_constructor_timelineeventtypefilter_include(): number;
  uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_refresh_tokens(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain(): number;
  uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain(): number;
  uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call(): number;
  uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change(): number;
  uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress(): number;
  uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel(): number;
  uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish(): number;
  uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call(): number;
  uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd(): number;
  uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update(): number;
  uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities(): number;
  ffi_matrix_sdk_ffi_uniffi_contract_version(): number;
}

// Casting globalThis to any allows us to look for `NativeMatrixSdkFfi`
// if it was added via JSI.
//
// The empty object is there for testing purposes only, and may be removed.
export default ((globalThis as any).NativeMatrixSdkFfi ??
  {}) as NativeModuleInterface;
