#!/bin/bash

# Initialize total time
total_time=0

# List of Python files to execute
python_files=("split.py" "run_chunks.py" "merge.py" "main.py")
# python_files=("demo1.py" "demo2.py")

# Loop through each file and execute it
for file in "${python_files[@]}"; do
    echo "Running $file..."
    start_time=$(date +%s.%N)
    python "$file"  # Use 'python3' or 'python' depending on your Python version
    end_time=$(date +%s.%N)
    if [ $? -ne 0 ]; then
        echo "Error occurred while running $file. Exiting."
        exit 1  # Exit if any script fails
    fi
    # Calculate the time taken for this file
    elapsed_time=$(echo "$end_time - $start_time" | bc)
    # Add to total time
    total_time=$(echo "$total_time + $elapsed_time" | bc)
    echo "$file completed successfully."
done
echo "All scripts executed successfully."
# Print the total execution time
echo "Total execution time: $total_time seconds."
