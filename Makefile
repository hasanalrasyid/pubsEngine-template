BUILDPATH:=$(shell find $$PUBSENGINE_ROOT/.stack-work/install|grep pkgdb$$|sed -e 's/^.*install.//g')
default: book
clean:
	rm -rf _build
thesis:
	rm -rf _build/auto
	GHC_PACKAGE_PATH=${PUBSENGINE_ROOT}/.stack-work/install/${BUILDPATH}:${HOME}/.stack/snapshots/${BUILDPATH}:${GHC_PACKAGE_PATH} pubsEngine manuscript thesis
article:
	rm -rf _build/auto
	GHC_PACKAGE_PATH=${PUBSENGINE_ROOT}/.stack-work/install/${BUILDPATH}:${HOME}/.stack/snapshots/${BUILDPATH}:${GHC_PACKAGE_PATH} pubsEngine manuscript article
book:
	rm -rf _build/auto
	GHC_PACKAGE_PATH=${PUBSENGINE_ROOT}/.stack-work/install/${BUILDPATH}:${HOME}/.stack/snapshots/${BUILDPATH}:${GHC_PACKAGE_PATH} pubsEngine manuscript book
