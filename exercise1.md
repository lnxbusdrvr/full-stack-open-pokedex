# 11.1

## Common steps in Continous Integration (CI) are:

Big part of this (CI) is the setup or configuration
of continuous integration (CI) pipeline.

Firstly cleaning and linting the code. Testing the code the merging the git's branches e.g. to main or master.
After tha we might need to build the software to so called production mode using eg. webpack.
After building we might need to pack the software to one package. Example if doing React Native Android app,
we will pack our software to .apk-packages, or in apple iPad, or iPhone etc. we pack our software to ipa-packages.
Of course we might also make legacy packaging like release our software realeases within
Linux Debian based deb-packages, Fedora/Redhat rpm-packages or in Microsoft Windows exe-files,
or in macOs dmg's or publish our software on Apple Store or Google Play.

## Alternatives for Jenkins or Github Actions

Alternatives for Jenkins or Github Actions
are for few examples:
- GitLab CI
- Bitbucked CI
- Azure DevOps
- AWS Pipeline
- JetBrains java-based TeamCity
- CircleCI specially for Open-source projects
- BamBoo
- Travis CI
- GoCI an open-source CI/CD pipeline
- Google Cloud CI
- Terraform


## Differnce on cloud-based CI and on Self-hosted pipeline

For small projects which won't need so much resources, like GPU-powered test-run,
and developped by small team, then cloud-based CI/CD pipelines are fine.

Running larger softaware developing with many teams involving and needing
for special resourses, like that GPU test-run mentiont earier,
I would choose Jenkins or any other self-hosted CI/CD pipeline to run it.


