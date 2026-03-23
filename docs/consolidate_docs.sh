#!/bin/bash

# Move accessibility docs to features
mv ACCESSIBILITY*.md features/ 2>/dev/null

# Move implementation summaries that are still in docs
mv *_IMPLEMENTATION.md implementation-summaries/ 2>/dev/null

# Create a guides folder for user-facing docs
mkdir -p guides

# Move guides
mv DELEGATION_GUIDE.md EXPIRATION_GUIDE.md guides/ 2>/dev/null
mv ADVANCED_DASHBOARD.md WIDGET_DEVELOPMENT.md guides/ 2>/dev/null

# Create a reference folder for technical docs
mkdir -p reference

# Move reference docs
mv API.md ARCHITECTURE.md STRUCTURE.md TESTING.md reference/ 2>/dev/null
mv DEPLOYMENT.md SECURITY.md reference/ 2>/dev/null

# Move misc docs to archive
mv PITCH.md WAVE_ISSUES.md archive/ 2>/dev/null

echo "Docs consolidated!"
