default: article
clean:
	rm -rf _build
thesis:
	rm -rf _build/auto
	GHC_PACKAGE_PATH=${PUBSENGINE_ROOT}/.stack-work/install/x86_64-linux-tinfo6/3d751d21e6b97977106d82e2ec3961638329963dd4d98bc4115204782f5d4168/8.10.7/pkgdb:${HOME}/.stack/snapshots/x86_64-linux-tinfo6/3d751d21e6b97977106d82e2ec3961638329963dd4d98bc4115204782f5d4168/8.10.7/pkgdb:${GHC_PACKAGE_PATH} pubsEngine manuscript thesis
article:
	rm -rf _build/auto
	GHC_PACKAGE_PATH=${PUBSENGINE_ROOT}/.stack-work/install/x86_64-linux-tinfo6/3d751d21e6b97977106d82e2ec3961638329963dd4d98bc4115204782f5d4168/8.10.7/pkgdb:${HOME}/.stack/snapshots/x86_64-linux-tinfo6/3d751d21e6b97977106d82e2ec3961638329963dd4d98bc4115204782f5d4168/8.10.7/pkgdb:${GHC_PACKAGE_PATH} pubsEngine manuscript article
