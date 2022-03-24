#!/bin/bash

configmap=$(kubectl get configmap/$1 -n $2 -o yaml) || true 
data=0
while IFS= read -r line; do
    if [ "$line" == "kind: ConfigMap" ]; then
        data=0
    elif [ "$line" == "data:" ]; then
        data=1
    elif [ $data == 1 ]; then
        IFS=': ' read -r key value <<< "$line"
        value="${value%\"}"
        value="${value#\"}"
        echo export $key="$value"
        export $key="$value"
    fi
done <<< "$configmap"
